import React from 'react';
import DropdownItem from "../dropdown-item-component/dropdown-item.component";

// import BtnComponent from "../btn-component/btn.component";

function Dropdown({items, activeComponent, updateCurrentItem}) {
    return (
        <div className="btn-group">
            {/*<BtnComponent type='button' classes='btn-info dropdown-toggle' text='Data' data-toggle="dropdown" aria-haspopup="true"*/}
            {/*              aria-expanded="false"/>*/}
            <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                Data
            </button>
            <DropdownItem items={items} activeComponent={activeComponent} updateCurrentItem={updateCurrentItem}/>
        </div>
    )
}

export default Dropdown;