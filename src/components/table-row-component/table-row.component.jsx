import React from 'react';

function TableRow({columnNames, values}) {
    return (
        <tbody>
        {
            values.map((value, index) => (
                <tr key={index}>
                    {/*<th scope="row">{value.id}</th>*/}
                    {
                        columnNames.map((column, index) => (
                            <td key={index}>{value[column]}</td>
                        ))
                    }
                </tr>
            ))
        }
        </tbody>
    )
}

export default TableRow