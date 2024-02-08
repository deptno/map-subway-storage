import {config} from 'dotenv'
import fs from 'fs-extra'
import {load} from './loader'
import path from 'path'
import * as R from 'ramda'
import {joiner} from './join'
import {HappyBox, toHappyBox} from './model'
import axios from 'axios'

config()

const dirRaw = 'raw/20231031'
const dirJson = 'public/static/json'
const fileJson = `${dirJson}/storage.json`

fs.readdir(dirRaw, async (err, data) => {
  if (err) {
    throw err
  }

  const subways = await Promise.all(
    data
      .map(file => path.join(dirRaw, file))
      .map(load)
      .concat(fs.mkdirp(dirJson)),
  )

  const happyBoxes: HappyBox[] = R.compose(R.map(toHappyBox), joiner('역명'), R.take(2))(subways)
  const names = R.uniq(happyBoxes
    .map(b => b.역명.replace(/([A-z]+)$/, ''))
    .map(b => [
      b,
      b.endsWith('역')
        ? b
        : `${b}역`,
    ]))

  for (const [n, nn] of names) {
    await axios
      .get(
        encodeURI(`http://dapi.kakao.com/v2/local/search/keyword.json?category_group_code=SW8&size=1&query=${nn}`),
        {
          headers: {
            authorization: `KakaoAK ${process.env.KEY_KAKAO}`,
          },
        },
      )
      .then(R.compose(
        (xy) => {
          console.log(n)
          happyBoxes
            .filter(b => b.역명.startsWith(n))
            .forEach(b => Object.assign(b, xy))
        },
        R.pick(['x', 'y']),
        R.head,
        R.path(['data', 'documents']),
      ))
      .catch(R.compose(console.error, R.pick(['code', 'message'])))
  }

  fs.writeJson(fileJson, happyBoxes)
})