import styled from '@emotion/styled';
import { Color, Radius, Typography } from '../../tokens';
import { IMenuStyled, IItemStyled } from './dropdown.types';
import Transition from '../../utils/transition';

export const ToggleStyled = styled.div({
  cursor: 'pointer',
});

const isActive = (active?: boolean) => {
  if (active) {
    return {
      backgroundColor: Color.primary.main,
      color: Color.primary.text,
      padding: '12px 17px',
      marginLeft: -1,
      marginRight: -1,
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
  display: 'block',
  minWidth: 160,
  padding: '12px 16px',
  cursor: 'pointer',
  color: color || 'inherit',
  textDecoration: 'none',
  transition: Transition(['background-color', 'color'], '.1s linear'),
  ...isActive(active),
}));

export const MenuStyled = styled.div<IMenuStyled>(({ show, right }) => ({
  position: 'absolute',
  display: show ? 'block' : 'none',
  borderRadius: Radius.normal,
  top: 'calc(100% + 4px)',
  backgroundColor: Color.white,
  right: right ? 0 : undefined,
  zIndex: 9,
  paddingTop: 8,
  paddingBottom: 8,
  boxShadow: '0 20px 36px rgba(0,0,0,.2)',
  border: `1px solid ${Color.border}`,
}));

export const Wrapper = styled.div({
  ...Typography.base,
  position: 'relative',
  display: 'inline-flex',
  verticalAlign: 'middle',
});
