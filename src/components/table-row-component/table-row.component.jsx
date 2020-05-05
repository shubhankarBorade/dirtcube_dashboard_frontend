import React from 'react';

function TableRow({columnNames, values}) {
    return (
        <tbody>
        {
            values.map(value => (
                <tr key={value.id}>
                    {
                        columnNames.map(column => (
                            <td key={value[column]}>{value[column]}</td>

                        ))
                    }
                </tr>
            ))
        }
        </tbody>
    )
}

export default TableRow