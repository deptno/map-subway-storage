import React, {useEffect, useMemo, useState} from 'react'
import {UlHappyBoxes} from '../components/ul/UlHappyBoxes'
import {MapContext} from '../context/map'

export default () => {
  const [boxes, setBoxes] = useState([])
  const [mount, setMount] = useState(false)
  const map = useMemo(() => {
    if (mount) {
      return new kakao.maps.Map(document.getElementById('map'), {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      })
    }
  }, [mount])

  useEffect(() => {
    fetch(location.pathname + 'static/json/storage.json')
      .then(response => response.json())
      .then(setBoxes)
    setMount(true)
  }, [])

  return (
    <MapContext.Provider value={map}>
      <div className="ph4-ns">
        <h1 className="ph2 ph0-ns f5">지하철 물품보관함(해피박스) 위치</h1>
        <div className="flex ba bw2 b--black-70 br3">
          <div id="map" style={{width: '100%', height: '300px'}}/>
        </div>
        <UlHappyBoxes data={boxes}/>
      </div>
    </MapContext.Provider>
  )
}
