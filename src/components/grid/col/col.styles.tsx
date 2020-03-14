import styled from '@emotion/styled';
import { MediaQuery } from '../../../tokens';
import { ICol } from './col.types';

const GRID_COLUMN: number = 12;

const percentage = (number: number) => number * 100;

const setColumn = (
  size: 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge',
  column?: number,
) => {
  if (column) {
    return {
      [MediaQuery.up[size]]: {
        flex: `0 0 ${percentage(column / GRID_COLUMN)}%`,
        maxWidth: `${percentage(column / GRID_COLUMN)}%`,
      },
    };
  }
  return {};
};

const isAutoColumn = (noColumnSet: boolean) => {
  if (noColumnSet) {
    return {
      flexBasis: 0,
      flexGrow: 1,
    };
  }
  return {};
};

const isOffset = (offset?: number) => {
  if (offset) {
    const num = offset / GRID_COLUMN;
    return {
      marginLeft: `${percentage(num)}%`,
    };
  }
  return {};
};

export const ColStyled = styled.div<ICol>(({ xs, sm, md, lg, xl, offset }) => ({
  position: 'relative',
  width: '100%',
  boxSizing: 'border-box',
  ...isAutoColumn(!sm && !md && !lg && !xl),
  ...isOffset(offset),
  ...setColumn('extraSmall', xs),
  ...setColumn('small', sm),
  ...setColumn('medium', md),
  ...setColumn('large', lg),
  ...setColumn('extraLarge', xl),
}));
