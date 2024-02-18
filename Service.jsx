import React from "react";
import Cards from "../Components/Cards";
import { Header } from "../Components/Header";
import {sdata} from "../Components/Sdata";
import Footer from '../Components/Footer';
function Service() {
  return (
    <>
      <Header />
      <div className="my-5">
        <h1 className="tab-center text-center">Our Service</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
        {sdata.map((e)=>{
          return(<Cards  image={e.img} tit={e.title} desc={e.des}/>)
        })


        }  
            </div>
          </div>
        </div>
      </div>
      
     <Footer/>
    </>
  );
}

export default Service;
