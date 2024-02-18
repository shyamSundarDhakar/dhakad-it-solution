import React from "react";
import { Header } from "../Components/Header";
import Common from "../Components/Common";
import Footer from '../Components/Footer';
function Home() {
  return (
    <>
    <div className="home">
      <Header />
      <Common
      name=' Grow your business with'
      imgsrc="..\img\programmers-day.jpg"
      visit="/service"
      btnName="Get Started"
      />
      </div>
      <div className='foot'>
     <Footer/>
     </div>
    </>
  );
}

export default Home;
