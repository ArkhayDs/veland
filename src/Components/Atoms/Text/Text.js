import React from 'react';

function Text({Htmltag, children, htmlfor}) {

    return (
        <Htmltag htmlFor={htmlfor}>{children}</Htmltag>
    )
}

export default Text;