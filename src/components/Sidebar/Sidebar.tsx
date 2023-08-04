import React from 'react';
import './Sidebar.scss';
import {NavigationMenu} from "../NavigationMenu/NavigationMenu";
import user from "../../assets/images/user-img.png"
// import gear from "../../assets/icons/gear.svg"
import {ReactComponent as Gear} from "../../assets/icons/gear.svg"
import {Button} from "../Button/Button";

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__user-info user-info">
                <img
                    className="user-info__avatar"
                    src={user}
                    alt="User Avatar"
                />

                <Button
                    buttonStyles="user-info__button button"
                >
                    <Gear className="button__icon"/>
                </Button>

            </div>
            <NavigationMenu/>
        </div>
    );
};
