import React from 'react';
import { useDispatch } from 'react-redux';

import WrappedIcon from '../WrappedIcon';

import { action as appActions } from '../../../store/app/slices';
import { MENU_TYPE } from '../../../constants';
import { Sort, Filter, Add } from '../../../assets/icons/16';

const DefaultMode = () => {
  const dispatch = useDispatch();

  const handleClickSort = (e) => {
    e.preventDefault();

    dispatch(appActions.openMenu({
      menuType: MENU_TYPE.HEADER.PHOTO_STORAGE.SORT,
      menuProps: {
        clientX: e.clientX,
        clientY: e.clientY,
      },
    }));
  };

  const handleClickFilter = (e) => {
    e.preventDefault();

    dispatch(appActions.openMenu({
      menuType: MENU_TYPE.HEADER.PHOTO_STORAGE.TAG_FILTER,
      menuProps: {
        clientX: e.clientX,
        clientY: e.clientY,
      },
    }));
  };

  return (
    <>
      <WrappedIcon Icon={Sort} onClick={handleClickSort} />
      <WrappedIcon Icon={Filter} onClick={handleClickFilter} />
      <WrappedIcon Icon={Add} />
    </>
  );
};

export default DefaultMode;
