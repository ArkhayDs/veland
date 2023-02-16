import React from 'react';

function Link({href, children}) {
    // TODO - add properties
    // font - color - fontsize - fontweight - lineheight - HTMLTag - alignement - text-decoration
    return (
        <a href={href}>{children}</a>
    );
}

export default Link;