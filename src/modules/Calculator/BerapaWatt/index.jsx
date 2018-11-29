import React from 'react';
import {
  Col,
  Row,
  Input,
} from 'reactstrap';

const Component = (props) => {
  // eslint-disable-next-line
  const { handleBatteryWattValue } = props;
  return (
    <Row className="calcRow">
      <Col xs="12" md="12" lg="12">
        <Input placeholder="Berapa Watt ???" onChange={e => handleBatteryWattValue(e.target.value)} />
      </Col>
    </Row>
  );
};

export default Component;
