import React from 'react';
import TableComponent from "../../components/table-component/table.component";

function DataPage() {
    return (
        <div>
            <TableComponent tableClass='table' columnNames={['id', 'name']} values={['Shubhankar']} id={'1'}/>
        </div>
    )
}

export default DataPage;