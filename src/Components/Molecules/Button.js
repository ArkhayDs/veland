import React from 'react';
import Text from "../Atoms/Text";
import Icon from "../Atoms/Icon";

export default function Button({displayIcon,displayText}) {
    // TODO - add Ternary for Icon & Text displays (booleen) + add properties
    // flextype - order - button alignement/position - paddings - margins - border - size

    return (
        <button type=submit>
            <Icon></Icon>
            <Text></Text>
        </button>
    );
};
