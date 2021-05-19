import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { css } from '@emotion/react';
import Category from './Category';
import Profile from './Profile';
import { Main } from '../../assets/icons/logo';
import { Fold, Photo, TrashCan } from '../../assets/icons/16';

const navigationStyle = css({
  width: 240,
  height: '100vh',
  position: 'fixed',
  top: 0,
  backgroundColor: '#FAFAFA',
  borderRight: '1px solid rgba(0, 0, 0, 0.1)',
});

const titleStyle = css({
  height: 48,
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  padding: '0 16px 0 19px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const menuStyle = css({
  overflow: 'scroll',
  height: 'calc(100% - 48px)',
  padding: '8px 16px 72px 16px',
});

const storageStyle = (isMatchPath) => css({
  height: 40,
  display: 'flex',
  alignItems: 'center',
  padding: '0 8px 0 8px',
  marginBottom: 7.5,
  fontSize: 14,
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
  backgroundColor: isMatchPath && '#EEEEEE',
  borderRadius: 4,
  '&:hover': {
    backgroundColor: isMatchPath ? '#EEEEEE' : '#F5F5F5',
  },
});

const trashCanStyle = (isMatchPath) => css({
  height: 40,
  display: 'flex',
  alignItems: 'center',
  padding: '0 8px 0 8px',
  marginTop: 10,
  fontSize: 14,
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
  backgroundColor: isMatchPath && '#EEEEEE',
  borderRadius: 4,
  '&:hover': {
    backgroundColor: isMatchPath ? '#EEEEEE' : '#F5F5F5',
  },
});

const Navigation = () => {
  const [categoryData, setCategoryData] = useState([
    {
      id: 'a',
      name: '프로젝트 A',
      boardData: [
        {
          id: 'a',
          categoryId: 'a',
          name: '보드 A',
        },
        {
          id: 'b',
          categoryId: 'a',
          name: '보드 B',
        },
      ],
    },
    {
      id: 'b',
      name: '프로젝트 B',
      boardData: [
        {
          id: 'c',
          categoryId: 'b',
          name: '보드 C',
        },
        {
          id: 'd',
          categoryId: 'b',
          name: '보드 D',
        },
      ],
    },
    {
      id: 'c',
      name: '프로젝트 C',
      boardData: [
        {
          id: 'e',
          categoryId: 'c',
          name: '보드 E',
        },
        {
          id: 'f',
          categoryId: 'c',
          name: '보드 F',
        },
      ],
    },
  ]);

  const findCategory = (data, id) => data.find((category) => category.id === id);
  const findCategoryId = (data, id) => data.findIndex((category) => category.id === id);

  const moveCategory = (id, toId) => {
    setCategoryData((prevState) => {
      const targetCategoryId = findCategoryId(prevState, id);
      const targetToCategoryId = findCategoryId(prevState, toId);

      const newCategoryData = [...prevState];
      const movingCategory = newCategoryData.splice(targetCategoryId, 1)[0];
      newCategoryData.splice(targetToCategoryId, 0, movingCategory);
      return newCategoryData;
    });
  };

  const findBoardId = (data, categoryId, boardId) => {
    const targetCategory = findCategory(data, categoryId);
    return targetCategory.boardData.findIndex((board) => board.id === boardId);
  };

  const moveBoard = (categoryId, id, toCategoryId, toId) => {
    setCategoryData((prevState) => {
      const targetCategoryId = findCategoryId(prevState, categoryId);
      const targetToCategoryId = findCategoryId(prevState, toCategoryId);
      const targetBoardId = findBoardId(prevState, categoryId, id);
      const targetToBoardId = toId ? findBoardId(prevState, toCategoryId, toId) : 0;

      const newCategoryData = [...prevState];
      const movingBoard = newCategoryData[targetCategoryId].boardData.splice(targetBoardId, 1)[0];
      movingBoard.categoryId = toCategoryId;
      newCategoryData[targetToCategoryId].boardData.splice(targetToBoardId, 0, movingBoard);
      return newCategoryData;
    });
  };

  const matchStoragePath = useRouteMatch('/');
  const matchTrashPath = useRouteMatch('/trash');

  return (
    <nav css={navigationStyle}>
      <Link to="/" css={titleStyle}>
        <Main />
        <Fold css={{ cursor: 'pointer' }} />
      </Link>

      <div css={menuStyle}>
        <Link to="/" css={storageStyle(matchStoragePath?.isExact)}>
          <Photo css={{ marginRight: '6px' }} />
          <span>이미지 보관함</span>
        </Link>
        <div>
          {categoryData.map((category) => (
            <Category
              key={category.id}
              id={category.id}
              name={category.name}
              boardData={category.boardData}
              moveCategory={moveCategory}
              moveBoard={moveBoard}
            />
          ))}
        </div>
        <Link to="/trash" css={trashCanStyle(matchTrashPath?.isExact)}>
          <TrashCan css={{ marginRight: '6px' }} />
          <span>휴지통</span>
        </Link>
      </div>

      <Profile />
    </nav>
  );
};

export default Navigation;
