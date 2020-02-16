import React, {useCallback, useEffect, useMemo, useState} from 'react'
import {UlHappyBoxes} from '../components/ul/UlHappyBoxes'
import {MapContext} from '../context/map'
import {Header} from '../components/header/Header'
import {seo} from '../constant'
import {NextSeo} from 'next-seo'
import {createFuse} from '../lib/fuse'
import {always, compose, identity, ifElse, isEmpty, path, tap} from 'ramda'
import Fuse from 'fuse.js'
import {SubwayStorage} from '../../object'

export default () => {
  const [boxes, setBoxes] = useState([])
  const [listedBoxes, setListedBoxes] = useState(boxes)
  const [mount, setMount] = useState(false)
  const [searchEngine, setSearchEngine] = useState<Fuse<SubwayStorage, {}>>()
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
      .then(
        tap(
          compose(
            setSearchEngine,
            createFuse,
          ),
        ),
      )
      .then(setBoxes)
    setMount(true)
  }, [])
  useEffect(() => setListedBoxes(boxes), [boxes])

  const [station, select] = useState<string>('역을 선택하세요.')
  const placeholder = useMemo(() => searchEngine ? '검색할 역명' : '인덱싱..', [searchEngine])
  const search = useCallback(
    compose(
      setListedBoxes,
      ifElse(isEmpty, always(boxes), identity),
      v => searchEngine.search(v),
      path<string>(['target', 'value']),
    ),
    [searchEngine, boxes],
  )
  const mapHeight = 250

  return (
    <MapContext.Provider value={map}>
      <style>
        {/*language=css*/ `
          .stations {
            height: calc(100vh - ${mapHeight + 180}px);
            top: ${mapHeight + 160}px;
          }

          .map-wrapper {
            height: ${mapHeight}px;
          }

          #map {
            width: 100%;
            height: ${mapHeight}px;
          }
        `}
      </style>
      <NextSeo {...seo}/>
      <div className="relative">
        <div className="fixed ph3-ns w-100">
          <Header/>
          <div className="flex map-wrapper">
            <div id="map"/>
          </div>
          <div className="pv3 ph3 flex items-center">
            <i className="ph2 pv1 fas fa-search blue"/>
            <input
              className="ph2 br2 ba b--black-60 lh-copy flex-auto"
              onChange={search}
              placeholder={placeholder}
              disabled={!searchEngine}
            />
          </div>
          <div className="ph3">
            <p className="mv1 mh0 ph2 pv1 br2 bg-black white">{station}</p>
          </div>
        </div>
        <div className="absolute overflow-scroll w-100 ph3 stations">
          <UlHappyBoxes data={listedBoxes} station={station} onClick={select}/>
        </div>
      </div>
    </MapContext.Provider>
  )
}


