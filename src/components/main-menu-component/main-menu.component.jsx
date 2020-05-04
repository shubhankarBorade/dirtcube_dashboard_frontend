import React from 'react';
import './main-menu.component.css';

function MenuItems({menuItem}) {
    return (
        <div>
            <h3>{menuItem}</h3>
        </div>
    )
}

export default MenuItems;