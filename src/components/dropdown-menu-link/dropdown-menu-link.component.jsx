import React from 'react';
import dataDropdownItem from "../../data/data-dropdown-item.data";
import './dropdown-menu-link.component.css'

function DropDownMenuLink({idx, item, currentActiveComponent, updateCurrentItem}) {
    function handleOnClick() {
        updateCurrentItem(dataDropdownItem[document.getElementById(item).innerText]);
    }

    return (
        <span id={item} key={idx}
              className={item === currentActiveComponent ? 'active dropdown-item cursor' : "dropdown-item cursor"}
              onClick={handleOnClick}>{item}</span>
    )
}

export default DropDownMenuLink;