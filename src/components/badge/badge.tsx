import React, { useState, useEffect, forwardRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import { BadgeStyled, CloseBadge } from './badge.styles';
import { IBadge } from './badge.types';

const Badge: React.FC<IBadge> = forwardRef(
  (
    {
      variant = 'primary',
      size,
      outline,
      customStyle,
      closeable,
      onClose,
      children,
      rounded,
      ...props
    },
    ref: React.Ref<HTMLDivElement>,
  ) => {
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
          rounded={rounded}
          customStyle={customStyle}
          ref={ref}
          {...props}
        >
          <span>{children}</span>
          {isCloseable()}
        </BadgeStyled>
      );
    }

    return null;
  },
);

Badge.displayName = 'Badge';

export default Badge;
