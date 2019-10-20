import React from 'react'
import {HappyBox} from '../../builder/model'

export const LiHappyBoxHeader: React.FC<Props> = props => {
  return (
    <li className="flex lh-copy dib pv2">
      <span className="w3">호선</span>
      <span className="w5">역명</span>
      <span className="w-100">위치정보</span>
      <span className="w3">계</span>
      <span className="w3">열</span>
      <span className="w3">제어부</span>
      <span className="w3">소형</span>
      <span className="w3">중형</span>
      <span className="w3">대형</span>
    </li>
  )
}

type Props = {
}
