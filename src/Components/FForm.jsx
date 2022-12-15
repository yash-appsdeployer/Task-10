import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { useState } from 'react';


const FForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    // const openPopover=()=>{

    // }

    const onSubmit = (e) => {
        e.preventDefault();
        setEmail(" ");
        setPassword(" ");
        setShow(true);
    }
    return (
        <>
            <Container >
                <h3 className='mt-5 page text-center'>Form</h3>
                <Form>
                    <Form.Group className="mb-4 mt-3" controlId="formBasicEmail">
                        <Form.Label className='data'>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-5 " >
                        <Form.Label className='data'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Col xs={6}>
                        <Button variant='info' type='click' onClick={onSubmit}>Submit</Button>
                    </Col>
                </Form>

                <Row>
                    <Col xs={6}>
                        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">Form</strong>
                            </Toast.Header>
                            <Toast.Body>Form Submitted Successfully!!</Toast.Body>
                        </Toast>
                    </Col>

                </Row>

            </Container>
        </>
    )
}

export default FForm