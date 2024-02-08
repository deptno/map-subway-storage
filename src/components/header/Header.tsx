import React, {FunctionComponent} from 'react'

export const Header: FunctionComponent<Props> = props => {
  return (
    <header className="flex f3 pa3">
      <h1 className="ph2 ph0-ns f5">지하철 물품보관함(해피박스) 위치</h1>
      <div className="ml-auto flex items-center justify-between">
        <a className="link black mh3" href="https://github.com/deptno/map-subway-storage" target="_blank">
          <i className="fab fa-github black-70 "/>
        </a>
        <a className="link black-70" href="http://deptno.github.io" target="_blank">
        <span className="f6 db underline b">
          about
        </span>
        </a>
      </div>
    </header>
  )
}

type Props = {}