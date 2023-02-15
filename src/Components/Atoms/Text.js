import React from 'react';
import {render} from "@testing-library/react";

function Text({Htmltag, children, htmlfor}) {
    // TODO - add properties
    // font - color - fontsize - fontweight - lineheight - HTMLTag - alignement

    return (
        <Htmltag htmlFor={htmlfor}>{children}</Htmltag>
    )
}

export default Text;