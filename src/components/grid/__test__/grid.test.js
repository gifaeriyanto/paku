import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Container, Row, Col } from '..';
import SampleContent from '../sampleContent';
import { Breakpoint } from '../../../tokens/mediaQuery/mediaQuery';

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
    const { getByTestId } = render(<Container fluid>Lorem ipsum</Container>);
    expect(getByTestId('paku-grid-container')).toHaveStyle({
      maxWidth: '100%',
    });
  });

  test('custom max width and gutter of the container', () => {
    const { getByTestId } = render(
      <Container size={800} gutter={10}>
        Lorem ipsum
      </Container>,
    );
    expect(getByTestId('paku-grid-container')).toHaveStyle({
      maxWidth: '800px',
      paddingLeft: '5px',
      paddingRight: '5px',
    });
  });

  test('no padding left and right on the container', () => {
    const { getByTestId } = render(
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
    expect(getByTestId('paku-grid-container')).toHaveStyle({
      paddingLeft: 0,
      paddingRight: 0,
    });
  });

  test('vertical space', () => {
    const { getAllByTestId } = render(
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
    expect(getAllByTestId('paku-grid-col')[0]).toHaveStyle({
      marginBottom: '16px',
    });
    expect(getAllByTestId('paku-grid-col')[1]).toHaveStyle({
      marginBottom: '0px',
    });
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
    const { getByTestId } = render(
      <Row center>
        <Col>
          <SampleContent />
        </Col>
      </Row>,
    );
    expect(getByTestId('paku-grid-row')).toHaveStyle({
      alignItems: 'center',
    });
  });
});
