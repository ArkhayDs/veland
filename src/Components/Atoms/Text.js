import React from 'react';
import {render} from "@testing-library/react";

function Text({Htmltag, content, htmlfor}) {
    // TODO - add properties
    // font - color - fontsize - fontweight - lineheight - HTMLTag - alignement

    return (
        <Htmltag htmlFor={htmlfor}>{content}</Htmltag>
    )
}

export default Text;