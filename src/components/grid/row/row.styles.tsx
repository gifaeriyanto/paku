import styled from '@emotion/styled';
import { IRow } from '../grid.types';

export const RowStyled = styled.div<IRow>(({ center }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  boxSizing: 'border-box',
  alignItems: center ? 'center' : 'initial',
}));
