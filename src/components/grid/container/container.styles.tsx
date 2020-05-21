import styled from '@emotion/styled';
import { IContainerStyled } from './container.types';

const isFluid = (size?: string | number, fluid?: boolean) => {
  if (fluid) {
    return {
      maxWidth: '100%',
    };
  }
  return {
    maxWidth: size,
  };
};

const setPadding = (gutter: number, size: number, noPadding?: boolean) => {
  if (noPadding) {
    return {
      paddingLeft: 0,
      paddingRight: 0,
      [`@media (max-width: ${size + gutter * 2}px)`]: {
        overflow: 'hidden',
      },
    };
  }
  return {
    paddingLeft: gutter / 2,
    paddingRight: gutter / 2,
  };
};

const setRowSpacing = (gutter: number) => {
  const space = -gutter / 2;
  return {
    marginLeft: space,
    marginRight: space,
  };
};

const setColSpacing = (gutter: number) => {
  const space = gutter / 2;
  return {
    paddingLeft: space,
    paddingRight: space,
  };
};

const setColVerticalSpace = (verticalSpace?: number) => {
  if (verticalSpace) {
    return {
      marginBottom: verticalSpace,
      '&:last-of-type': {
        marginBottom: 0,
      },
    };
  }
  return null;
};

export const ContainerStyled = styled.div<IContainerStyled>(
  ({ gutter, size, noPadding, verticalSpace, fluid }) => ({
    margin: '0 auto',
    boxSizing: 'border-box',
    ...setPadding(gutter, size, noPadding),
    ...isFluid(size, fluid),
    '& .paku-grid-row': {
      ...setRowSpacing(gutter),
      '& > .paku-grid-col': {
        ...setColSpacing(gutter),
        ...setColVerticalSpace(verticalSpace),
      },
    },
  }),
);
