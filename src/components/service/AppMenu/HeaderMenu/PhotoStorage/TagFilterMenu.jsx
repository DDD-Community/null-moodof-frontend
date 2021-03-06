import React from 'react';
import { css } from '@emotion/react';

import MenuFrame from './MenuFrame';

const SortMenu = () => (
  <MenuFrame width={240} height={330} css={{ lineHeight: '1px' }}>
    <div css={titleWrapperStyle}>
      <span>필터</span>
      <div css={titleCheckWrapperStyle}>
        <span>전체</span>
        <input type="checkbox" />
      </div>
    </div>
    <div css={checkListStyle}>
      <div css={noTagCheckItemStyle}>
        <span>태그 없음</span>
        <input type="checkbox" />
      </div>
      <div css={checkItemWrapperStyle}>
        <div css={checkItemStyle}>
          <span>태그1</span>
          <input type="checkbox" />
        </div>
        <div css={checkItemStyle}>
          <span>태그2</span>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  </MenuFrame>
);

const titleWrapperStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 40,
  padding: '0 20px 0 16px',
  fontWeight: 500,
  fontSize: 14,
  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
});

const titleCheckWrapperStyle = css({
  display: 'flex',
  alignItems: 'center',
  '& span': {
    marginRight: 8,
    color: 'rgba(0, 0, 0, 0.4)',
  },
  '& input': {
    margin: 0,
  },
});

const checkListStyle = css({
  margin: 8,
  fontSize: 14,
});

const noTagCheckItemStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 224,
  height: 40,
  padding: '0 12px',
  marginBottom: 4,
  borderRadius: 4,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
});

const checkItemWrapperStyle = css({
  borderTop: '1px solid rgba(0, 0, 0, 0.05)',
  paddingTop: 4,
});

const checkItemStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 224,
  height: 40,
  padding: '0 12px',
  borderRadius: 4,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
});

export default SortMenu;
