import React from 'react';
import {
  Container, Jumbotron, Fade,
} from 'reactstrap';

import Calculator from '../../modules/Calculator';

import './style.css';

class CalculatorPage extends React.Component {
  state = {
    openCalculator: true,
  };

  render() {
    const { openCalculator } = this.state;
    return (
      <Container className="container">
        <Fade in={openCalculator}>
          <Jumbotron className="calcJumbotron">
            <Calculator />
          </Jumbotron>
        </Fade>
      </Container>
    );
  }
}

export default CalculatorPage;
