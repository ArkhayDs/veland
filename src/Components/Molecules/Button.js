import React from 'react';
import Text from "../Atoms/Text";
import Icon from "../Atoms/Icon";

export default function Button({displayIcon,displayText, Htmltag, content, type, iconName}) {
    // TODO - add Ternary for Icon & Text displays (booleen) + add properties
    // flextype - order - button alignement/position - paddings - margins - border - size

    return (
        <button type={type}>
            <Icon></Icon>
            <Text Htmltag={Htmltag} content={content}></Text>
        </button>
    );
};
