import React from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import {
  Card, CardBody,
  Button, Fade,
  Col, Alert,
  Row, Jumbotron, Container,
} from 'reactstrap';
import './style.css';


import TipeBattery from './TipeBattery';
import JumlahBattery from './JumlahBattery';
import BerapaWatt from './BerapaWatt';
import ModEff from './ModEff';

// eslint-disable-next-line
class Calculator extends React.Component {
  static propTypes = {
    stores: PropTypes.object.isRequired, // eslint-disable-line
  }

  renderCalcScreen = () => {
    const {
      stores: {
        calculator: {
          calculatorState: {
            batteryTypeValue,
            batteryCount,
            batteryWattValue,
            efficientValue,
            showResult,
          },
          getResult,
        },
      },
    } = this.props;
    const battery = batteryTypeValue === '' ? 'Battery Type ' : batteryTypeValue;

    return showResult ? `${getResult} MAX WATT` : `${batteryCount} Battery + ${battery} + ${batteryWattValue} watt + ${efficientValue}%`;
  }

  renderCalcButton = () => {
    const {
      stores: {
        calculator: {
          calculatorState: {
            showResult,
          },
          handleCalculating,
          handleReset,
        },
      },
    } = this.props;
    return showResult ? (
      <Button block color="danger" onClick={() => handleReset()}>Clear All</Button>
    ) : (
      <Button block color="primary" onClick={() => handleCalculating()}>Calculate</Button>
    );
  }

  renderCardBody = () => {
    const {
      stores: {
        calculator: {
          calculatorState: {
            efficientValue,
            funfactOpen,
            batteryWattValue,
            showResult,
            fadeForCalcBody,
            fadeForResBody,
          },
          handleChangeSlider,
          handleOpenFunFact,
          handleBatteryCount,
          handleBatteryWattValue,
          getResult,
        },
      },
    } = this.props;
    const { renderCalcButton } = this;
    return showResult ? (
      <Fade in={fadeForResBody}>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">
              Max Watt:
              {' '}
              {getResult}
            </h1>
            <p className="lead">
            Hasil Kalkulasi menunjukan bahwa, Nilai Maksimum Watt yang aman untuk kamu gunakan adalah
              {' '}
              {getResult}
              {' '}
            watt
            </p>
          </Container>
        </Jumbotron>
        <Row className="calcRow">
          <Col xs="12" md="12" lg="12">
            {renderCalcButton()}
          </Col>
        </Row>
      </Fade>
    ) : (
      <div>
        <JumlahBattery handleBatteryCount={handleBatteryCount} />
        <TipeBattery {...this.props} />
        <BerapaWatt handleBatteryWattValue={handleBatteryWattValue} wattValue={batteryWattValue} />
        <ModEff
          handleChangeSlider={handleChangeSlider}
          handleOpenFunFact={handleOpenFunFact}
          efficientValue={efficientValue}
          funfactOpen={funfactOpen}
        />
        <Row className="calcRow">
          <Col xs="12" md="12" lg="12">
            {renderCalcButton()}
          </Col>
        </Row>
      </div>
    );
  }

  render() {
    const { renderCalcScreen, renderCardBody } = this;


    return (
      <Card>
        <Alert color="dark" className="calcAlertScreen">
          <p className="calcScreen">
            { renderCalcScreen() }
          </p>
        </Alert>
        <CardBody className="calcBody">
          {renderCardBody()}
        </CardBody>
      </Card>
    );
  }
}

export default inject('stores')(observer(Calculator));
