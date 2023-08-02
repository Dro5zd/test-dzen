import React from 'react';
import {NavLink} from "react-router-dom";
import {RoutePath} from "../../routes/RoutesPath";
import './NavigationMenu.scss';

export const NavigationMenu = () => {
    return (
        <ul className="menu">
            <li className="menu__menu-item">
                <NavLink to={RoutePath.orders}>Orders</NavLink>
            </li>
            <li className="menu__menu-item">
                <NavLink to={RoutePath.products}>Products</NavLink>
            </li>
        </ul>
    );
};
