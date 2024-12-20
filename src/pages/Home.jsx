import React from 'react'
import Main from '../compoents/Main'
import SpecialityMenu from '../compoents/SpecialityMenu'
import TopDoctors from '../compoents/TopDoctors'
import Banner from '../compoents/Banner'

function Home() {
  return (
    <div>
      <Main/>
      <SpecialityMenu/>
      <TopDoctors/>
      <Banner/>
    </div>
  )
}

export default Home