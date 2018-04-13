import React from 'react'
import Head from 'next/head'

const App = (props) => (
  <div className='app-wrapper'>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <style>
        {`
        body{
          background-color: white;
          width: 100%;
          height: 100%;
          margin: 0;
          top: 0;
          overflow-x: hidden;
          overflow-y: hidden;
          background-color: white;
          font-family: 'Montserrat', sans-serif;
        }
        html {
          height: 100%;
          width: 100%;
          margin: 0;
          top: 0;
          box-sizing: border-box;
          overflow-y: hidden;
          font-family: 'Montserrat', sans-serif;
        }
        #__next {
          height: 100%;
        }
        .wrapperHeight {
          height: 100%;
        }
        `}
      </style>
    </Head>
    <div className='content'>
      {props.children}
    </div>
    <style jsx>
      {`
        .container {
          max-width: var(--site-width);
          margin:0 auto;
          overflow-y: hidden;
          overflow-x: hidden;
          height: 100%;
          position: fixed;
          width: 100%;
        }
        .app-wrapper {
          height: 100%;
        }
        .content {
          width: 100%;
          height:calc(100% - 1px);
        }
        #header {
          height: 69px;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 999;
        }
      `}
    </style>
  </div>
)

export default App
