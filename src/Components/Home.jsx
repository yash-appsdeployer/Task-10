import React from 'react'
import { Button, Container } from 'react-bootstrap'



const Home = ({ A, B, clickA, clickB }) => {
    return (
        <div>
            <Container className='text-center'>
                <h3 className='mt-5 page'> Home Page</h3>

                <span className='action'>A={A}  B={B}</span>

                <Button variant='info' onClick={clickA}>Increment-A</Button>
                {" "}
                <Button variant='info' onClick={clickB} className="m-5">Increment-B</Button>
            </Container>
        </div>
    )
}

export default Home