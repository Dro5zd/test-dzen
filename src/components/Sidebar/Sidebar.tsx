import React from 'react';
import './Sidebar.scss';
import {NavigationMenu} from "../NavigationMenu/NavigationMenu";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavigationMenu />
    </div>
  );
};
