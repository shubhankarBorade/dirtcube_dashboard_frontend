import React from 'react'
import MenuItems from "../main-menu-item-component/main-menu-item.component";

function MainMenu({menuItems, handleChange}) {
    return (
        menuItems.map(item => (
            <MenuItems key={item} menuItem={item} setMenu={handleChange}/>
        ))
    )
}

export default MainMenu