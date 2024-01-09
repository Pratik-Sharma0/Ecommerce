import React from 'react'
import Herosection from './components/Herosection'


const About = () => {
 
  const data={
    name:"ABOUT-US",
    image:"https://img.freepik.com/free-vector/worldwide-e-commerce-concept_23-2147657845.jpg"
  }
  return (
    <>
    <div className='mb-[15%]'>
  
    <Herosection mydata={data}/>
    </div>
    
    </>
  )
}

export default About