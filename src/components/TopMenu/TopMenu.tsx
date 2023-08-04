import React from 'react';
import './TopMenu.scss';
import SessionCounter from "../SessionCounter/SessionCounter";
import {Logo} from "../Logo/Logo";
import {TimeAndDate} from "../TimeAndDate/TimeAndDate";

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

            <div className="header__statistic statistic">
                <TimeAndDate/>
                <SessionCounter/>
            </div>

        </header>
    );
};
