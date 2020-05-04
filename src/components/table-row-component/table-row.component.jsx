import React from 'react';

function TableRow({id, values = []}) {
    return (
        <tbody>
        <tr>
            <th scope="row">{id}</th>
            {
                values.map(value => (
                    <td>{value}</td>
                ))
            }
        </tr>
        </tbody>
    )
}

export default TableRow