import React from 'react';

import {
  Button,
  Col,
  Row,
  Popover, PopoverHeader, PopoverBody,
} from 'reactstrap';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import './style.css';

const Component = (props) => {
  const {
    // eslint-disable-next-line
    handleChangeSlider, handleOpenFunFact, efficientValue, funfactOpen,
  } = props;

  const horizontalLabels = {
    0: '0%',
    100: '100%',
  };
  return (
    <Row className="calcRow">
      <Col xs="12" md="12" lg="12">
        <fieldset className="calcFieldset">
          <legend className="calcLegend">
                  Mod Efficiency
          </legend>
          <Button color="danger" id="Popover1" onClick={() => handleOpenFunFact()}>
            <i>
                    Fun Fact !
            </i>
          </Button>
          <Popover className="calcPopOver" placement="bottom" isOpen={funfactOpen} target="Popover1" toggle={() => handleOpenFunFact()}>
            <PopoverHeader className="calcPopOver">Fun Fact tentang Mod Efficiency</PopoverHeader>

            <PopoverBody className="calcPopOver">
              <p>
                        Tidak ada elektronik yang
                {' '}
                <strong>100%</strong>
                {' '}
                          efisien.
                {' '}
              </p>
              <p>
                          Chip seperti
                {' '}
                <strong>DNA250</strong>
                {' '}
                            mempunyai efisisensi sampai
                {' '}
                <strong>97%</strong>
                        ,
                <strong>Yihi</strong>
                {' '}
                          sekitar
                {' '}
                <strong>94%</strong>
                        , dan
                {' '}
                <strong>Gene (Drag)</strong>
                          Chip sekitar
                {' '}
                <strong>95%</strong>
                        .
                          Jika kamu tidak mengetahui efisiensi mod kamu gunakan nilai
                {' '}
                <strong>85%</strong>
                        .
              </p>
            </PopoverBody>
          </Popover>
          <Slider
            min={0}
            max={100}
            value={efficientValue}
            onChange={handleChangeSlider}
            labels={horizontalLabels}
          />
          <div className="calcEfficienValue">
            <h3>
              {efficientValue}
                       %
            </h3>
          </div>
        </fieldset>
      </Col>
    </Row>
  );
};

export default Component;
