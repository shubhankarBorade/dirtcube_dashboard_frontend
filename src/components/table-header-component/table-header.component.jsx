import React from 'react';

function TableHeader({columnNames = []}) {
    return (
        <thead>
        <tr>
            {
                columnNames.map((columnName, index) => (
                    <th key={index} scope="col">{columnName}</th>
                ))
            }
        </tr>
        </thead>
    )
}

export default TableHeader;