import React from 'react'
import Body from './components/body/body.jsx'
import Header  from './components/header/header.jsx'
import Service from './components/service/service.jsx'

import Servicebox from './components/service-box/service-box.jsx'

function MainPage() {
  return (
    <>
      <Header/>
      <Body/>
      <Service/>
      <Servicebox/>
    </>
  )
}

export default MainPage;