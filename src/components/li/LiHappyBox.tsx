import React, {useCallback, useContext, useMemo} from 'react'
import {HappyBox} from '../../builder/model'
import {MapContext} from '../../context/map'
import * as R from 'ramda'

export const LiHappyBox: React.FC<Props> = props => {
  const {data, focus, onClick} = props
  const {호선, 역명, 위치정보, 계, 열, 제어부, 소형, 중형, 대형, x, y} = data
  const map = useContext(MapContext)
  const move = useCallback(() =>
      R.ifElse(
        R.isNil,
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
      )(map),
    [map],
  )
  const css = useMemo(
    () => focus
      ? 'station flex items-center lh-copy bg-blue white '
      : 'station flex items-center lh-copy hover-bg-light-blue hover-white items-stretch',
    [focus],
  )

  return (
    <li className={css} onClick={move}>
      <style>
        {/*language=css*/ `
          .station {
            height: 40px;
            line-height: 16px;
            padding-top: 2px;
            padding-bottom: 2px;
          }
          .station {
            border-bottom: 1px solid black;
          }
          .station:last-child {
            border-bottom: none;
          }
        `}
      </style>
      <span className="f5-ns f7 tc w3 w4-ns">{호선}</span>
      <span className="f5-ns f7 tc bg-black-05 w4">{역명}</span>
      <span className="f5-ns f7 w-100 ">{위치정보}</span>
      <span className="f5-ns f7 tc bg-black-05 w3-ns w2">{계}</span>
      <span className="f5-ns f7 tc w3-ns w2">{열}</span>
      <span className="f5-ns f7 tc bg-black-05 w4-ns w2">{제어부}</span>
      <span className="f5-ns f7 tc w3-ns w2">{소형}</span>
      <span className="f5-ns f7 tc bg-black-05 w3-ns w2">{중형}</span>
      <span className="f5-ns f7 tc w3-ns w2">{대형}</span>
    </li>
  )
}

type Props = {
  data: HappyBox
  onClick(args): void
  focus: boolean
}
