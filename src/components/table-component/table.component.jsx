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
function TableComponent({tableClass = 'table', columnNames, ...otherProps}) {
    return (
        <div className='table-responsive'>
            <table className={tableClass}>
                <TableHeader columnNames={columnNames}/>
                <TableRow columnNames={columnNames} {...otherProps}/>
            </table>
        </div>
    )
}

export default TableComponent