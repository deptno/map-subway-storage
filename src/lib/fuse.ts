import Fuse from 'fuse.js'
import {SubwayStorage} from '../../object'

export const createFuse = (data: SubwayStorage[]) => {
  return new Fuse(
    data,
    {
      keys: [
        {name: '역명', weight: .7},
        {name: '호선', weight: .2},
        {name: '위치정보', weight: .1},
      ],
    }
  )
}
