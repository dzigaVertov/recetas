import React from 'react';
import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';


const NavBar = (props) => {
    return (
        <Container className='my-4'>
          <Link to='/'>Home</Link>
        </Container>
    );
};

export default NavBar;
