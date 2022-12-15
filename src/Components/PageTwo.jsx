import React from 'react'
import { Button, Container } from 'react-bootstrap'

const pageTwo = ({ A, B, decA, clickB }) => {
    return (
        <div>
            <Container className='text-center'>
                <h3 className='mt-5 page'>Page-B</h3>

                <span className='action'>A={A}  B={B}</span>

                <Button variant='info' onClick={decA}>Decrement-A</Button>
                {" "}
                <Button variant='info' onClick={clickB} className="m-5">Increment-B</Button>
            </Container>
        </div>
    )
}

export default pageTwo