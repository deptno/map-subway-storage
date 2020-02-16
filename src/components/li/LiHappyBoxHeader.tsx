import React from 'react'

export const LiHappyBoxHeader: React.FC<Props> = props => {
  return (
    <li className="flex lh-copy dib pv2 mb3">
      <span className="f5-ns f7 tc w3 w4-ns">호선</span>
      <span className="f5-ns f7 tc bg-black-05 w4">역명</span>
      <span className="f5-ns f7 tc w-100">위치정보</span>
      <span className="f5-ns f7 tc bg-black-05 w3-ns w2">계</span>
      <span className="f5-ns f7 tc w3-ns w2">열</span>
      <span className="f5-ns f7 tc bg-black-05 w4-ns w2">제어부</span>
      <span className="f5-ns f7 tc w3-ns w2">소형</span>
      <span className="f5-ns f7 tc bg-black-05 w3-ns w2">중형</span>
      <span className="f5-ns f7 tc w3-ns w2">대형</span>
    </li>
  )
}

type Props = {
}
