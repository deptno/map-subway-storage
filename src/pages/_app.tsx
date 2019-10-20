import App from 'next/app'
import Head from 'next/head'
import React from 'react'

export default class extends App {
  render() {
    const {Component, pageProps} = this.props

    return (
      <>
        <Head>
          <title>storage</title>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.11.1/tachyons.min.css"
          />
          <script type="text/javascript" src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=3fa038fcb901854ff4d7ede249a974bb`}/>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}
