import React from 'react';
import Text from "../Atoms/Text";
import Input from "../Atoms/Input";
import Link from "../Atoms/Link";

function InputPassword({type, placeholder, htmlfor, content, inputName}) {
    // TODO - add props to Text & Input + add properties
    // displayLabel booleen (with Ternary)

    return (
        <>
            <Text Htmltag={"label"} htmlfor={htmlfor}>{content}</Text>
            <Input type={type} placeholder={placeholder} inputName={inputName}></Input>
            <Link href={"#"}>Forgot Password</Link>
        </>
    );
}

export default InputPassword;