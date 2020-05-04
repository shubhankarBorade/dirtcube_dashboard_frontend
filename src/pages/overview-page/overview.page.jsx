import React from 'react';
import './overview.page.css'
import MenuItems from "../../components/main-menu-component/main-menu.component";

const menuItems = [
    'Overview',
    'Data',
    'Users',
    'Inbox',
    'Setting'
];

function OverviewPage() {
    return (
        <div className='row fullHeight'>
            <div className='col-2 main-menu'>
                {
                    menuItems.map(item => (
                        <MenuItems menuItem={item}/>
                    ))
                }
            </div>
            <div className='col-10 canvas'>
                <h3>Hello World</h3>
                <h3>Hello World</h3>
                <h3>Hello World</h3>
                <h3>Hello World</h3>
            </div>
        </div>
    )
}

export default OverviewPage;