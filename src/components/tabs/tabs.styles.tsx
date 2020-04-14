import styled from '@emotion/styled';
import { Color, Typography } from '../../tokens';
import { ITabsNavStyled } from './tabs.types';
import Transition from '../../utils/transition';

export const TabsNavs = styled.div({
  ...Typography.base,
  display: 'flex',
  marginBottom: 10,
});

const isActiveNav = (active?: boolean) => {
  if (active) {
    return {
      borderColor: Color.primary.main,
    };
  }
  return {};
};

export const TabsNav = styled.div<ITabsNavStyled>(({ active }) => ({
  padding: 6,
  cursor: 'pointer',
  borderBottom: '2px solid transparent',
  marginRight: 6,
  transition: Transition(['border-color'], '.1s linear'),
  '&:last-of-type': {
    marginRight: 0,
  },
  ...isActiveNav(active),
}));

export const TabsPanels = styled.div({
  ...Typography.base,
});
