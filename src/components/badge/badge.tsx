import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (!show && onClose) {
      onClose();
    }
  }, [show, onClose]);

  const handleClose = () => {
    setShow(false);
  };

  const isCloseable = () => {
    if (onClose || closeable) {
      return (
        <CloseBadge onClick={handleClose} data-testid="badge-close">
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
