import React from 'react';
import styled from '@emotion/styled';

export interface ISampleContent {
  color?: string;
  height?: number;
}

const ContentStyled = styled.div<ISampleContent>(({ color, height }) => ({
  backgroundColor: color,
  height,
}));

const SampleContent: React.FC<ISampleContent> = ({
  color = '#eee',
  height = 50,
}) => (
  <ContentStyled
    color={color}
    height={height}
    className="paku-grid-sample-content"
    data-testid="paku-grid-sample-content"
  />
);

export default SampleContent;
