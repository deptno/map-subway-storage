import React, {useCallback, useContext, useMemo} from 'react'
import {HappyBox} from '../../builder/model'
import {MapContext} from '../../context/map'
import * as R from 'ramda'

export const LiHappyBox: React.FC<Props> = props => {
  const {data, focus, onClick} = props
  const {호선, 역명, 위치정보, 계, 열, 제어부, 소형, 중형, 대형, x, y} = data
  const map = useContext(MapContext)
  const move = useCallback(
    R.ifElse(
      R.isNil(map),
      R.always(undefined),
      R.compose(
        () => map.setCenter(new kakao.maps.LatLng(y, x)),
        R.tap(
          R.compose(
            onClick,
            R.always(역명),
          ),
        ),
      ),
    ),
    [map],
  )
  const css = useMemo(() =>
      focus
        ? 'flex lh-copy bg-blue white'
        : 'flex lh-copy hover-bg-light-blue hover-white'
    , [focus],
  )

  return (
    <li className={css} onClick={move}>
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
  onClick(args): void
  focus: boolean
}
