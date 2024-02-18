import React,{useState} from 'react'
import { Header } from '../Components/Header'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Footer from '../Components/Footer';
function Contact() {
  const [validated, setValidated] = useState(false);

const[data,setData]=useState({
  firstName:"",
  lastName:"",
  UserName:"",
  City:"",
  State:"",
  Zip:"",
})
console.log(data)
const InputEvent=(event)=>
{
  const{name,value}=event.target;
setData((preVal)=>{
  return{
    ...preVal,[name]:value,
  }
})
}

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
 <>
 <Header/>
    <div className='my-5'>
      <h1 className='text-center'>Contact Us</h1>
    </div>
    <div className='container contact_div'>
      <div className='row' >
        <div className='col-md-12 col-10 mx-auto '>
         
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First Name"
            value={data.firstName}
            onChange={InputEvent}
            name='firstName'
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="last name"
            value={data.lastName}
            onChange={InputEvent}
            name='lastName'
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label>Email Id</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Email Id"
              aria-describedby="inputGroupPrepend"
              required
              value={data.UserName}
              onChange={InputEvent}
              name="UserName"
            />
            <Form.Control.Feedback type="invalid" onChange={InputEvent}>
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      
      
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required  
          value={data.City}
          name="City"
          onChange={InputEvent}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required value={data.State} onChange={InputEvent} name="State"/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required value={data.Zip} onChange={InputEvent} name="Zip" />
          <Form.Control.Feedback type="invalid" >
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
          
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
        
        </div>
      </div>
    </div>
    
    <Footer/>
    </>
  )
}

export default Contact