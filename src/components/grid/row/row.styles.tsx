import styled from '@emotion/styled';
import { IRow } from './row.types';

export const RowStyled = styled.div<IRow>(({ center }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  boxSizing: 'border-box',
  alignItems: center ? 'center' : 'initial',
}));
