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
        }
        html {
          height: 100%;
          width: 100%;
          margin: 0;
          top: 0;
          font-family: 'Montserrat', sans-serif;
        }
        #__next {
          height: 100%;
          background-color: #276E35;
        }
        `}
      </style>
    </Head>
    <div className='content'>
      {props.children}
    </div>
  </div>
)

export default App
