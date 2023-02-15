import React from 'react';
import Text from "../Atoms/Text";
import Input from "../Atoms/Input";
import Link from "../Atoms/Link";

function Input_password({type, placeholder, htmlfor, content, href}) {
    // TODO - add props to Text & Input + add properties
    // displayLabel booleen (with Ternary)

    return (
        <>
            <Text Htmltag={"label"} htmlfor={htmlfor} content={content}></Text>
            <Input type={type} placeholder={placeholder}></Input>
            <Link href={"#"}>Forgot Password</Link>
        </>
    );
}

export default Input_password;