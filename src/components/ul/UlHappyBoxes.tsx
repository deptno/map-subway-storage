import React, {useState} from 'react'
import {HappyBox} from '../../builder/model'
import {LiHappyBox} from '../li/LiHappyBox'
import {LiHappyBoxHeader} from '../li/LiHappyBoxHeader'
import * as R from 'ramda'

export const UlHappyBoxes: React.FC<Props> = props => {
  const [station, select] = useState<string>()

  return (
    <ul className="list ph2 f6 w-100">
      {station}
      <LiHappyBoxHeader/>
      {props.data.map(box => <LiHappyBox key={box.역명} data={box} onClick={select} focus={R.equals(station, box.역명)}/>)}
    </ul>
  )
}

type Props = {
  data: HappyBox[]
}
