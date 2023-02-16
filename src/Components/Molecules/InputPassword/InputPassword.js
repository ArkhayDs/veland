import React from 'react';
import Text from "../../Atoms/Text/Text";
import Stack from "../../Atoms/Stack/Stack";
import Link from "../../Atoms/Link/Link";
import Input from "../../Atoms/Input/Input";
import Icon from "../../Atoms/Icon/Icon";

function InputPassword({type, placeholder, htmlfor, content, inputName}) {

    return (
        <Stack Htmltag={"div"} classCustom={"Input_Group"}>
            <Text Htmltag={"label"} htmlfor={htmlfor}>{content}</Text>
            <Stack Htmltag={"div"} classCustom={"Input"}>
                <Input type={type} placeholder={placeholder} inputName={inputName}></Input>
                <span>
                    <Icon name={"Icon_Eye-Visible"} color={"#fff"} width={24} height={24}/>
                </span>
            </Stack>
            <Link href={"#"}>Forgot Password</Link>
        </Stack>
    );
}

export default InputPassword;