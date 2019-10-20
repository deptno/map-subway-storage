import React from 'react'
import {HappyBox} from '../../builder/model'
import {LiHappyBox} from '../li/LiHappyBox'
import {LiHappyBoxHeader} from '../li/LiHappyBoxHeader'

export const UlHappyBoxes: React.FC<Props> = props => {
  return (
    <ul className="list ph2 f6 w-100">
      <LiHappyBoxHeader/>
      {props.data.map(box => <LiHappyBox key={box.역명} data={box}/>)}
    </ul>
  )
}

type Props = {
  data: HappyBox[]
}
