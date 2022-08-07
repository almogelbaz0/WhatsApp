import './TopBar.css';

import Avatar from '@mui/material/Avatar';
import React from 'react';

import { UserType } from '../../Modals/User/User';
import BasicMenu, { menuOptions } from '../Menu/MenuButtom';

type TopBarItem = {};

interface TopBarProps {
  userMenu: UserType;
  headerName?: string;
  menuItems?: menuOptions;
}

const TopBar = ({ userMenu, headerName, menuItems }: TopBarProps) => {
  return (
    <header className="topBar">
      <div className="userConent">
        <Avatar alt={userMenu.name} />
        <span className="chat-name">{headerName}</span>
      </div>
      <div className="actionsConent">
        {menuItems && <BasicMenu menuOptions={menuItems}></BasicMenu>}
      </div>
    </header>
  );
};

export default TopBar;
