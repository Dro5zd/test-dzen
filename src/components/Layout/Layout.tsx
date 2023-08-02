import React, {Suspense} from 'react';
import {Outlet} from 'react-router-dom';
import {TopMenu} from "../TopMenu/TopMenu";
import {Sidebar} from "../Sidebar/Sidebar";

export const Layout = () => {
    return (
        <>
            <Sidebar/>
            <TopMenu/>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet/>
            </Suspense>
        </>
    );
};
