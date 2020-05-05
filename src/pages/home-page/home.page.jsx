import React, {useState} from 'react';
import './home.page.css'
import MainMenu from "../../components/main-menu-component/main-menu.component";
import DisplayComponent from "../../components/display-component/display.component";

import menuItems from "../../data/menu-items.data";
import currentMenuItem from "../../data/currentMenuItem";

function HomePage() {
    const [currentMenu, setMenu] = useState(currentMenuItem.Overview)

    function handleChange(value) {
        setMenu(value)
    }

    return (
        <div className='row fullHeight'>
            <div className='col-2 main-menu'>
                <MainMenu menuItems={menuItems} handleChange={handleChange}/>
            </div>
            <div className='col-10 canvas'>
                <DisplayComponent state={currentMenu}/>
            </div>
        </div>
    )
}

export default HomePage;