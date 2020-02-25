import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import {Gtag} from '../components/header/Gtag'
import {const_google_analytics_id} from '../constant'

export default class extends App {
  render() {
    const {Component, pageProps} = this.props

    return (
      <>
        <Head>
          <title>지하철 물품보관소(해피박스) 위치</title>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.11.1/tachyons.min.css"
          />
          <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=3fa038fcb901854ff4d7ede249a974bb"/>
          <Gtag id={const_google_analytics_id}/>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}
