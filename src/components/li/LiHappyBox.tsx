import React, {useCallback, useContext} from 'react'
import {HappyBox} from '../../builder/model'
import {MapContext} from '../../context/map'

export const LiHappyBox: React.FC<Props> = props => {
  const map = useContext(MapContext)
  const move = useCallback(() => map.setCenter(new kakao.maps.LatLng(y, x)), [map])
  const {호선, 역명, 위치정보, 계, 열, 제어부, 소형, 중형, 대형, x, y} = props.data

  return (
    <li className="flex lh-copy hover-bg-blue hover-white" onClick={move}>
      <span className="w3">{호선}</span>
      <span className="w5">{역명}</span>
      <span className="w-100">{위치정보}</span>
      <span className="w3">{계}</span>
      <span className="w3">{열}</span>
      <span className="w3">{제어부}</span>
      <span className="w3">{소형}</span>
      <span className="w3">{중형}</span>
      <span className="w3">{대형}</span>
    </li>
  )
}

type Props = {
  data: HappyBox
}
