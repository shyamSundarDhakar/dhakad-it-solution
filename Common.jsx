import React from 'react'
import { Link } from "react-router-dom";
function Common(props) {
  return (
    <div>
        <section id="header" className="">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row d-flex ">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 order-lg-1  flex-column">
                  <h1>
                   {props.name}  <strong>Dhakad It Solotion</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developer making websites
                  </h2>
                  <div className="mt-3">
                    <Link to={props.visit} style={{textDecoration:"none"}} className="btn-get-started">
                      Get Started
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgsrc} className='img-fluid animated' alt="homeimg" width={'100%'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Common