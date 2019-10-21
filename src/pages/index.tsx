import React, {useEffect, useMemo, useState} from 'react'
import * as R from 'ramda'
import {UlHappyBoxes} from '../components/ul/UlHappyBoxes'
import {MapContext} from '../context/map'

export default () => {
  const [boxes, setBoxes] = useState([])
  const [mount, setMount] = useState(false)
  const map = useMemo(() => {
    if (mount) {
      return new kakao.maps.Map(document.getElementById('map'), {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level : 3
      })
    }
  }, [mount])

  useEffect(() => {
    fetch(location.pathname + 'static/json/storage.json')
      .then<any[]>(R.invoker(0, 'json'))
      .then(setBoxes)
    setMount(true)
  }, [])

  return (
    <MapContext.Provider value={map}>
      <div className="ph4">
        <h1> 지하철 물품보관함 위치 </h1>
        <h3> 지하철 해피박스 위치 </h3>
        <div id="map" style={{width: '500px', height: '400px'}}/>
        <UlHappyBoxes data={boxes}/>
      </div>
    </MapContext.Provider>
  )
}
