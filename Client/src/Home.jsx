import React from 'react'
import Herosection from './components/Herosection'
import Service from './components/Service'
import Trusted from './components/Trusted'
import LimitedStock from './components/LimitedStock'

const Home = () => {
  const data={
    name:"HAPPY SHOPPING",
    image:"../src/images/Shoping.png"
  }
  return (
    <>
    <Herosection mydata={data}/>
    <LimitedStock/>
    <Service/>
    <Trusted/>
    </>
  )
}

export default Home