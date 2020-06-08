import React from 'react';

function Gate({ isOpen }) {
    var gateStatus = '';
    if (isOpen)
        gateStatus = 'open';
    else
        gateStatus = 'closed';

    return (
        <div className="TextCenter">
            <h4>Gate is {gateStatus}!</h4>
        </div>
    );
}

export default Gate;
