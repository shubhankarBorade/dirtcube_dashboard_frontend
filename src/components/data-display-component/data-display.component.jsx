import React, {useState, useEffect} from 'react';
import Dropdown from "../dropdown-component/dropdown.component";
import dataDropdownItem from "../../data/data-dropdown-item.data";
import TableComponent from "../table-component/table.component";

function DataDisplay({columnNames, usersData}) {
    function getKeys(object) {
        return Object.keys(object)
    }

    const [currentDropDownMenu, setDropDownMenu] = useState('');
    const [dropdownItems, setDropDownItems] = useState([]);

    useEffect(() => {
        setDropDownMenu(dataDropdownItem.users);
        setDropDownItems(getKeys(dataDropdownItem))
    }, [])

    function HandleUpdateCurrentDropDownMenu(updateState) {
        setDropDownMenu(updateState)
    }

    return (
        <div>
            <div>
                <Dropdown items={dropdownItems} activeComponent={currentDropDownMenu}
                          updateCurrentItem={HandleUpdateCurrentDropDownMenu}/>
            </div>
            <div>
                <TableComponent tableName={currentDropDownMenu} columnNames={columnNames} values={usersData}/>
            </div>
        </div>
    )
}

export default DataDisplay