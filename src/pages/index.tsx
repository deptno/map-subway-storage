import React, {useEffect, useMemo, useState} from 'react'
import {UlHappyBoxes} from '../components/ul/UlHappyBoxes'
import {MapContext} from '../context/map'
import {Header} from '../components/header/Header'

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
          <Header/>
          <div className="flex" style={{height: '300px'}}>
            <div id="map" style={{width: '100%', height: '300px'}}/>
          </div>
          <div className="ph3">
            <p className="ph2 pv1 br2 bg-black white">{station}</p>
          </div>
        </div>
        <div className="absolute overflow-scroll w-100 ph3" style={{height: 'calc(100vh - 350px)', top: '420px'}}>
          <UlHappyBoxes data={boxes} station={station} onClick={select}/>
        </div>
      </div>
    </MapContext.Provider>
  )
}
