import React from 'react';

function Link({href, children}) {

    return (
        <a href={href}>{children}</a>
    );
}

export default Link;