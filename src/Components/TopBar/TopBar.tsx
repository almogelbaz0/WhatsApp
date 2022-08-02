import './TopBar.css';

import Avatar from '@mui/material/Avatar';
import React from 'react';

import { UserType } from '../../Modals/User/User';

type TopBarItem = {};

interface TopBarProps {
  userMenu: UserType;
  //   topBarMenu: JSX.Element;
}

const TopBar = ({ userMenu }: TopBarProps) => {
  return (
    <header className="topBar">
      <div className="userConent">
        <Avatar alt={userMenu.name} />
      </div>
      <div className="actionsConent"></div>
    </header>
  );
};

export default TopBar;
