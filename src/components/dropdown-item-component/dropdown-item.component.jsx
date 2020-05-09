import React from 'react';
import DropDownMenuLink from "../dropdown-menu-link/dropdown-menu-link.component";

function DropdownItem({items, activeComponent, updateCurrentItem}) {
    return (
        <div className="dropdown-menu">
            {
                items.map((item, idx) => (
                    <DropDownMenuLink key={idx} item={item} idx={idx} currentActiveComponent={activeComponent}
                                      updateCurrentItem={updateCurrentItem}/>
                ))
            }
        </div>
    )
}

export default DropdownItem;