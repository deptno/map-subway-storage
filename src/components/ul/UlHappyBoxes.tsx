import React, {useState} from 'react'
import {HappyBox} from '../../builder/model'
import {LiHappyBox} from '../li/LiHappyBox'
import {LiHappyBoxHeader} from '../li/LiHappyBoxHeader'
import * as R from 'ramda'

export const UlHappyBoxes: React.FC<Props> = props => {
  const {data, station, onClick} = props
  return (
    <ul className="list ph2 mv0 f6 w-100">
      <LiHappyBoxHeader/>
      {data.map(box => <LiHappyBox key={box.역명} data={box} onClick={onClick} focus={R.equals(station, box.역명)}/>)}
    </ul>
  )
}

type Props = {
  data: HappyBox[]
  onClick(args): void
  station?: string
}
