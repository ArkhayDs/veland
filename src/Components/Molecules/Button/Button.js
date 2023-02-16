import React from 'react';
import Icon from "../../Atoms/Icon/Icon";
import Text from "../../Atoms/Text/Text";

export default function Button({Htmltag, content, type}) {

    return (
        <button type={type}>
            <Text Htmltag={Htmltag}>{content}</Text>
        </button>
    );
};
