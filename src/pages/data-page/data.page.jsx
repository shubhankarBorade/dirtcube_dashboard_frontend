import React, {useState, useEffect} from 'react';
import TableComponent from "../../components/table-component/table.component";
import Dropdown from "../../components/dropdown-component/dropdown.component";

import userData from "../../data/user.data";
import dataDropdownItem from "../../data/data-dropdown-item.data";

function DataPage() {
    // const [entity, setEntity] = useState('user');
    // const [columnNames, setColumnName] = useState(getKeys(userData[0]))

    const columnName = getKeys(userData[0])

    function getKeys(object) {
        return Object.keys(object)
    }

    return (
        <div>
            <div>
                <Dropdown items={dataDropdownItem}/>
            </div>
            <div>
                <TableComponent columnNames={columnName} values={userData}/>
            </div>
        </div>
    )
}

export default DataPage;