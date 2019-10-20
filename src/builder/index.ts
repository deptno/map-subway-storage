import fs from 'fs-extra'
import {load} from './loader'
import path from 'path'
import * as R from 'ramda'
import {joiner} from './join'
import {toHappyBox} from './model'

const dirRaw = 'raw'
const dirJson = 'public/static/json'
const fileJson = `${dirJson}/storage.json`

fs.readdir(dirRaw, (err, data) => {
  if (err) {
    throw err
  }

  const promises = data
    .map(file => path.join(dirRaw, file))
    .map(load)
    .concat(fs.mkdirp(dirJson))

  Promise.all(promises).then(
    R.compose(
      fs.writeJson.bind(null, fileJson),
      R.map(toHappyBox),
      joiner('역명'),
      R.take(2),
    )
  )
})
