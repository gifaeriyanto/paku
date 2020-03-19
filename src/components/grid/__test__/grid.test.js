import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Container, Row, Col } from '..';
import SampleContent from '../sampleContent';

describe('Grid', () => {
  test('basic render', () => {
    const { container } = render(
      <Container>
        <Row>
          <Col>
            <SampleContent />
          </Col>
          <Col>
            <SampleContent />
          </Col>
        </Row>
      </Container>,
    );
    expect(container).toMatchSnapshot();
  });

  test('fluid container', () => {
    const { container } = render(<Container fluid>Lorem ipsum</Container>);
    expect(container).toMatchSnapshot();
  });

  test('custom max width and gutter of the container', () => {
    const { container } = render(
      <Container size={800} gutter={10}>
        Lorem ipsum
      </Container>,
    );
    expect(container).toMatchSnapshot();
  });

  test('no padding left and right on the container', () => {
    const { container } = render(
      <Container noPadding>
        <Row>
          <Col>
            <SampleContent />
          </Col>
          <Col>
            <SampleContent />
          </Col>
        </Row>
      </Container>,
    );
    expect(container).toMatchSnapshot();
  });

  test('vertical space', () => {
    const { container } = render(
      <Container verticalSpace={16}>
        <Row>
          <Col>
            <SampleContent />
          </Col>
          <Col>
            <SampleContent />
          </Col>
        </Row>
      </Container>,
    );
    expect(container).toMatchSnapshot();
  });

  test('responsive column', () => {
    const { container } = render(
      <Col lg={2} md={5} sm={4} xs={6}>
        <SampleContent />
      </Col>,
    );
    expect(container).toMatchSnapshot();
  });

  test('offset column', () => {
    const { container } = render(
      <Col offset={2}>
        <SampleContent />
      </Col>,
    );
    expect(container).toMatchSnapshot();
  });

  test('centering column in row', () => {
    const { container } = render(
      <Row center>
        <Col>
          <SampleContent />
        </Col>
      </Row>,
    );
    expect(container).toMatchSnapshot();
  });
});
