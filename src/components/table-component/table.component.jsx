import React from 'react';
import TableHeader from "../table-header-component/table-header.component";
import TableRow from "../table-row-component/table-row.component";

/**
 *
 * @param tableClass
 * @param {[String]} columnNames
 * @param {String} id
 * @param {[String]} values
 * @returns {*}
 * @constructor
 */
function TableComponent({tableClass = 'table', columnNames, id, values}) {
    return (
        <div className='table-responsive'>
            <table className={tableClass}>
                <TableHeader columnNames={columnNames}/>
                <TableRow id={id} values={values}/>
            </table>
        </div>
    )
}

export default TableComponent