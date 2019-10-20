import React, {useEffect, useState} from 'react'
import * as R from 'ramda'
import {UlHappyBoxes} from '../components/ul/UlHappyBoxes'

export default () => {
  const [boxes, setBoxes] = useState([])

  useEffect(() => {
    fetch('/static/json/storage.json')
      .then<any[]>(R.invoker(0, 'json'))
      .then(setBoxes)
  }, [])

  return (
    <div className="ph4">
      <h1> 지하철 물품보관함 위치 </h1>
      <h3> 지하철 해피박스 위치 </h3>
      <UlHappyBoxes data={boxes}/>
    </div>
  )
}
