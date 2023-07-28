import React from 'react';
import './TopMenu.scss';
import SessionCounter from "../SessionCounter";
import {Logo} from "../Logo/Logo";

export const TopMenu = () => {

    return (
        <header className="header">
            <div className="header__search-content search-content">
                <Logo/>
                <input
                    placeholder="Search"
                    type="text"
                    className="search-content__input"
                />
            </div>
            <div>TIME</div>
            <div>
               <SessionCounter/>
            </div>
        </header>
    );
};
