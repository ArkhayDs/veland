import React from 'react';

function Link({href, content}) {
    // TODO - add properties
    // font - color - fontsize - fontweight - lineheight - HTMLTag - alignement - text-decoration
    return (
        <a href={href}>{content}</a>
    );
}

export default Link;