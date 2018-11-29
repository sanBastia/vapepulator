import React from 'react';
import {
  Col,
  Row,
  Button,
} from 'reactstrap';

const Component = (props) => {
  // eslint-disable-next-line
  const { handleBatteryCount } = props;
  return (
    <Row className="calcRow">
      <Col xs="12" md="3" lg="3" className="calcBatteryBtn">
        <Button block onClick={() => handleBatteryCount(1)}>1 Battery</Button>
      </Col>
      <Col xs="12" md="3" lg="3" className="calcBatteryBtn">
        <Button block onClick={() => handleBatteryCount(2)}>2 Battery</Button>
      </Col>
      <Col xs="12" md="3" lg="3" className="calcBatteryBtn">
        <Button block onClick={() => handleBatteryCount(3)}>3 Battery</Button>
      </Col>
      <Col xs="12" md="3" lg="3" className="calcBatteryBtn">
        <Button block onClick={() => handleBatteryCount(4)}>4 Battery</Button>
      </Col>
    </Row>
  );
} 

export default Component;
