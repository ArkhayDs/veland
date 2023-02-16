import React from 'react';
import Text from "../../Atoms/Text/Text";
import Input from "../../Atoms/Input/Input";
import Stack from "../../Atoms/Stack/Stack";

function InputGroup({content, type, placeholder, htmlfor, inputName}) {

    return (
        <Stack Htmltag={"div"} classCustom={"Input_Group"}>
            <Text Htmltag={"label"} htmlfor={htmlfor} >{content}</Text>
            <Stack Htmltag={"div"} classCustom={"Input"}>
                <Input type={type} placeholder={placeholder} inputName={inputName}></Input>
            </Stack>
        </Stack>
    );
}

export default InputGroup;