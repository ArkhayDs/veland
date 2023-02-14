import React from 'react';
import Text from "../Atoms/Text";
import Input from "../Atoms/Input";

function InputGroup({content, type, placeholder, htmlfor}) {
    // TODO - add props to Text & Input + add properties
    // displayLabel booleen (with Ternary)

    return (
        <>
            <Text Htmltag={"label"} htmlfor={htmlfor} content={content}></Text>
            <Input type={type} placeholder={placeholder}></Input>
        </>
    );
}

export default InputGroup;