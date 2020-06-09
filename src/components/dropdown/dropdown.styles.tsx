import styled from '@emotion/styled';
import { Color, Radius, Typography } from '../../tokens';
import { IMenuStyled, IItemStyled } from './dropdown.types';
import Transition from '../../utils/transition';

export const ToggleStyled = styled.div({
  cursor: 'pointer',
  svg: {
    display: 'none',
  },
});

const isActive = (active?: boolean) => {
  if (active) {
    return {
      backgroundColor: Color.primary.main,
      color: Color.primary.text,
      padding: '12px 17px',
      '&:hover': {
        backgroundColor: Color.primary.main,
        color: Color.primary.text,
      },
    };
  }
  return {
    '&:hover': {
      backgroundColor: Color.background.level1,
    },
  };
};

export const ItemStyled = styled.div<IItemStyled>(({ active, color }) => ({
  position: 'relative',
  display: 'block',
  minWidth: 160,
  padding: '12px 16px',
  cursor: 'pointer',
  color: color || 'inherit',
  textDecoration: 'none',
  transition: Transition(['background-color', 'color'], '.1s linear'),
  '&:hover > .paku-dropdown-toggle + .paku-dropdown-menu': {
    display: 'block !important',
  },
  '.paku-dropdown-toggle': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    svg: {
      display: 'block',
    },
  },
  ...isActive(active),
}));

export const MenuStyled = styled.div<IMenuStyled>(({ right }) => ({
  position: 'absolute',
  display: 'none',
  borderRadius: Radius.normal,
  backgroundColor: Color.white,
  right: right ? 0 : undefined,
  zIndex: 9,
  paddingTop: 8,
  paddingBottom: 8,
  boxShadow: '0 10px 36px rgba(0,0,0,.4)',
  '.paku-dropdown-menu': {
    top: '0 !important',
    left: '100%',
    display: 'none !important',
  },
}));

export const Wrapper = styled.div({
  ...Typography.base,
  position: 'relative',
  display: 'inline-flex',
  verticalAlign: 'middle',
});
