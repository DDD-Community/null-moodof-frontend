import React from 'react';
import { css } from '@emotion/react';

const wrappedIconStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 32,
  height: 32,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(245, 245, 245, 1)',
  },
});

const WrappedIcon = ({
  Icon, color, css: style, ...args
}) => (
  <div css={[wrappedIconStyle, style]} {...args}>
    <Icon color={color} />
  </div>
);

export default WrappedIcon;
