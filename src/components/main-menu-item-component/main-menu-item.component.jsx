import React from 'react';
import './main-menu-item.component.css';

import currentMenuItem from "../../data/currentMenuItem";

function MenuItems({menuItem, setMenu}) {
    function handleOnClick() {
        setMenu(currentMenuItem[document.getElementById(menuItem).innerText]);
    }

    return (
        <div>
            <span id={menuItem} className={'menu-item'} key={menuItem} onClick={handleOnClick}>{menuItem}</span>
        </div>
    )
}

export default MenuItems;