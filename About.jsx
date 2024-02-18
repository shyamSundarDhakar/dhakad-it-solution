import React from 'react'
import Common from '../Components/Common'
import { Header } from '../Components/Header'
import Footer from '../Components/Footer';

function About() {
  return (
<>

<Header/>
<Common
name='Welcome to About page'
imgsrc="..\img\about.avif"
visit="/Contact"
btnName="Contact Now"
/>

<Footer/>
</>  )
}

export default About