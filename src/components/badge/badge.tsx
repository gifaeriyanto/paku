import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { BadgeStyled, CloseBadge } from './badge.styles';
import { IBadge } from './badge.types';

const Badge: React.FC<IBadge> = ({
  variant = 'primary',
  size,
  outline,
  customStyle,
  closeable,
  onClose,
  children,
}) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    if (onClose) {
      onClose();
    }
  };

  const isCloseable = () => {
    if (onClose || closeable) {
      return (
        <CloseBadge onClick={handleClose}>
          <IoMdClose />
        </CloseBadge>
      );
    }
    return null;
  };

  if (show) {
    return (
      <BadgeStyled
        variant={variant}
        size={size}
        outline={outline}
        customStyle={customStyle}
      >
        <span>{children}</span>
        {isCloseable()}
      </BadgeStyled>
    );
  }

  return null;
};

export default Badge;
