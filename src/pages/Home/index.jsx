import React from 'react';
import {
  Container, Jumbotron, Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import './style.css';


// eslint-disable-next-line
class Home extends React.Component {
  render() {
    return (
      <Container className="container">
        <Jumbotron>
          <h1 className="display-3">Halo, Vapers!</h1>
          <p className="lead">
          Selamat datang di
            {' '}
            <i>Vapepulator</i>
            {' '}
aplikasi sederhana yang akan membantu anda dalam menghitung berapakah nilai
            {' '}
            <i>wattage</i>
            {' '}
yang aman untuk mod anda,
          Terima Kasih sebesar besarnya atas dukungan daripada
            {' '}
            <a className="vapingJKTlink" href="https://vapingjkt.com/" target="_BLANK" rel="noopener noreferrer"> VapingJKT </a>
            {' '}
yang telah membantu menyukseskan
          aplikasi sederhana ini
          </p>
          <hr className="my-2" />
          <p>More tools coming soon !</p>
          <p className="lead">
            <Link to="/calculator">
              <Button color="primary">
                Vapepulator
              </Button>
            </Link>
          </p>
        </Jumbotron>
      </Container>
    );
  }
}

export default Home;
