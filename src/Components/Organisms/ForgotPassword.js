import React from 'react';
import Icon from "../Atoms/Icon";
import Text from "../Atoms/Text";
import Stack from "../Atoms/Stack";
import InputGroup from "../Molecules/InputGroup";

function ForgotPassword(props) {
    return (
        <>
            <Stack Htmltag={"div"}>
                <Icon name={"Icon_Arrow-Left"}/>
                <Text Htmltag={"h2"}>Forgot Password</Text>
                <Text Htmltag={"p"}>An email will be sent to you if an account is associated with this email</Text>
            </Stack>

            <Stack Htmltag={"div"}>
                <InputGroup placeholder={"Email"} type={"email"} content={"Email"}/>
            </Stack>
        </>
    );
}

export default ForgotPassword;