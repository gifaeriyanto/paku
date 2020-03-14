import React from 'react';
import styled from '@emotion/styled';

interface ISampleContent {
  color: string;
  height: number;
}

const ContentStyled = styled.div<ISampleContent>(({ color, height }) => ({
  backgroundColor: color,
  height,
}));

const SampleContent: React.FC<ISampleContent> = ({
  color = '#eee',
  height = 50,
}) => <ContentStyled color={color} height={height} />;

export default SampleContent;
