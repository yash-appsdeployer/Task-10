import React from 'react'
import { Button, Container } from 'react-bootstrap'

const pageOne = ({ A, B, clickA, decB }) => {
    return (
        <div>
            <Container className='text-center'>
                <h3 className='mt-5 page'>Page-A</h3>

                <span className='action'>A={A}  B={B}</span>

                <Button variant='info' onClick={clickA}>Increment-A</Button>
                {" "}
                <Button variant='info' onClick={decB} className="m-5">Decrement-B</Button>
            </Container>
        </div>
    )
}

export default pageOne