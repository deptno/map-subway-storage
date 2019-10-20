import React, {useEffect, useState} from 'react'
import * as R from 'ramda'
import {UlHappyBoxes} from '../components/ul/UlHappyBoxes'

declare var kakao
export default () => {
  const [boxes, setBoxes] = useState([])

  useEffect(() => {
    fetch('/static/json/storage.json')
      .then<any[]>(R.invoker(0, 'json'))
      .then(setBoxes)

    new kakao.maps.Map(document.getElementById('map'), {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level : 3
    });
  }, [])

  return (
    <div className="ph4">
      <h1> 지하철 물품보관함 위치 </h1>
      <h3> 지하철 해피박스 위치 </h3>
      <div id="map" style={{width: '500px', height: '400px'}}/>
      <UlHappyBoxes data={boxes}/>
    </div>
  )
}
