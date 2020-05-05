import React from 'react';

function Dropdown({items}) {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                Data
            </button>
            <div className="dropdown-menu">
                {
                    items.map((item, idx) => (
                        <a key={idx} className='dropdown-item' href="/">{item}</a>
                    ))
                }
            </div>
        </div>
    )
}

export default Dropdown;