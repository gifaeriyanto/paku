import React from 'react';
import { boolean, number } from '@storybook/addon-knobs';
import { Container, Row, Col } from '.';
import SampleContent from './sampleContent';

export default {
  title: 'Components/Grid',
  component: [Container, Row, Col, SampleContent],
};

export const Basic = () => (
  <Container
    noPadding={boolean('No Padding', false)}
    verticalSpace={number('Vertical Space', 32)}
  >
    <Row center={boolean('Center', false)}>
      <Col xs={4}>
        <SampleContent />
      </Col>
      <Col xs={4}>
        <SampleContent />
      </Col>
      <Col xs={4}>
        <SampleContent height={100} />
      </Col>
      <Col xs={12}>
        <SampleContent />
      </Col>
    </Row>
  </Container>
);

export const AutoColumn = () => (
  <Container>
    <Row>
      <Col>
        <SampleContent />
      </Col>
      <Col>
        <SampleContent />
      </Col>
      <Col>
        <SampleContent />
      </Col>
    </Row>
  </Container>
);

export const Offset = () => (
  <Container>
    <Row>
      <Col offset={2} xs={8}>
        <SampleContent />
      </Col>
    </Row>
  </Container>
);

export const Responsive = () => (
  <Container>
    <Row>
      <Col xs={6} md={5} sm={4} lg={2}>
        <SampleContent />
      </Col>
      <Col xs={6} md={4} sm={4} lg={2}>
        <SampleContent />
      </Col>
      <Col xs={6} md={3} sm={4} lg={2}>
        <SampleContent />
      </Col>
    </Row>
  </Container>
);

Basic.story = {
  parameters: {
    jest: ['__test__/grid.test.js'],
  },
};
