import React from 'react';
import Icon from "../../Atoms/Icon/Icon";
import Text from "../../Atoms/Text/Text";

export default function Button({Htmltag, content, type}) {
    // TODO - add Ternary for Icon & Text displays (booleen) + add properties
    // flextype - order - button alignement/position - paddings - margins - border - size

    return (
        <button type={type}>
            <Text Htmltag={Htmltag}>{content}</Text>
        </button>
    );
};
