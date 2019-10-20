import App from 'next/app'
import Head from 'next/head'

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
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}
