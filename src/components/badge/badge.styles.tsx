import styled from '@emotion/styled';
import { Color, Radius, Typography } from '../../tokens';
import { IBadgeStyled } from './badge.types';
import { isOutline } from '../../utils/commonStyles';

const setSize = (size?: 'small' | 'large') => {
  switch (size) {
    case 'small':
      return {
        padding: '4px 8px',
        fontSize: 10,
      };

    case 'large':
      return {
        padding: '8px 16px',
        fontSize: 14,
      };

    default:
      return {
        padding: '6px 12px',
        fontSize: 12,
      };
  }
};

export const BadgeStyled = styled.div<IBadgeStyled>(
  ({ variant, size, outline }) => ({
    ...Typography.base,
    color: Color[variant].text,
    backgroundColor: Color[variant].main,
    borderRadius: Radius.normal,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...setSize(size),
    ...isOutline(variant, outline),
    marginLeft: 4,
    '&:first-of-type': {
      marginLeft: 0,
    },
  }),
  ({ customStyle }) => ({ ...customStyle }),
);

export const CloseBadge = styled.div({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: -6,
  marginLeft: 8,
  width: 16,
  height: 16,
});
