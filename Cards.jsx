import React from 'react'
import  {Card}  from "react-bootstrap";

import { NavLink } from 'react-bootstrap';

function Cards(props) {
  return (
    <>
    
    <div className="col-md-4 col-10 mx-auto pt-4">
                <Card >
                  <Card.Img variant="top" src={props.image}height={280} />
                  <Card.Body>
                    <Card.Title>{props.tit} </Card.Title>
                    <Card.Text>
                      {props.desc}
                    </Card.Text>
                    <NavLink variant="primary" style={{border:"1px solid green" ,width:"160px",backgroundColor:"green",borderRadius:"20px",color:"white"}} >Go somewhere</NavLink>
                  </Card.Body>
                </Card>
              
                </div>
            

    </>
  )
}

export default Cards