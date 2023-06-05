import React from 'react';
import './styles.scss'
function Buttons(props) {
    return (
        <div>
            <button onClick={() => window.location.href = '/book/add'}>ADD</button>
            <button onClick={() => window.location.href = '/book/delete'}>DELETE</button>
            <button onClick={() => window.location.href = '/book/update'}>UPDATE</button>
            
        </div>
    );
}

export default Buttons; 