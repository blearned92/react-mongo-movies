import { Outlet } from 'react-router-dom';

import React from 'react';

const Layout = () => { 
    return (
        <main data-testid="layout">
            <Outlet/>
        </main>
    )
}

export default Layout;