import React from 'react';

function Text({Htmltag, children, htmlfor}) {
    // TODO - add properties
    // font - color - fontsize - fontweight - lineheight - HTMLTag - alignement

    return (
        <Htmltag htmlFor={htmlfor}>{children}</Htmltag>
    )
}

export default Text;