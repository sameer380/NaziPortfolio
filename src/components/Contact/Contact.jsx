import React,{useState, useRef} from 'react'
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css'

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const [notDone, setNotDone] = useState(false)
    

  

    const sendEmail = (e) => {
    e.preventDefault();
  setDone(true)

    };
    

    return(
        <Container style={{paddingTop: '50px'}} >
            <Row >
            <Col md={6} className="c-left" >
            <h1 >Get in Touch</h1>
            <h1 className="yellow">Contact me</h1>
            </Col>
            <Col md={6} className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="from_name" className="user"  placeholder="Name" />
                <input type="email" name="reply_to" className="user" placeholder="Email" />
                <textarea name="message" className="user" placeholder="Message" />
                <span className='not-done' >{notDone && "Please, fill all the input field"}</span>
              <Button type="submit" className="button" disabled={done}>Send</Button>
                <span className='done'>{done && "Thanks for contacting me and be sure i have recieved your mail.If you have any serious query then i will reply. Also if you need me, you can conatct me on Linkedin."}</span>
                </form>
            </Col>
            </Row>
        </Container>
    )
}

export default Contact