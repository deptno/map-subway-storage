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

  const [station, select] = useState<string>('역을 선택하세요.')

  return (
    <MapContext.Provider value={map}>
      <div className="relative">
        <div className="fixed ph3-ns w-100">
          <h1 className="ph2 ph0-ns f5">지하철 물품보관함(해피박스) 위치</h1>
          <div className="flex" style={{height: '300px'}}>
            <div id="map" style={{width: '100%', height: '300px'}}/>
          </div>
          <p className="ph2 pv1 br2 bg-black white">{station}</p>
        </div>
        <div className="relative" style={{height: '400px'}}/>
        <div className="overflow-scroll w-100 ph3" style={{height: 'calc(100vh - 350px)'}}>
          <UlHappyBoxes data={boxes} station={station} onClick={select}/>
        </div>
      </div>
    </MapContext.Provider>
  )
}
