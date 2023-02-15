import React from 'react';
import Text from "../Atoms/Text";
import Link from "../Atoms/Link";
import Form from "../Organisms/Form";
import Stack from "../Atoms/Stack";

function Login(isLogin) {
    const login = isLogin.isLogin

    const loginInputs = [
        {
            key: 0, content: "Email", type: "text", placeholder: "Email", htmlfor: "Email"
        },
        {
            key: 1, content: "Password", type: "password", placeholder: "Password", htmlfor: "Password"
        }
    ]

    return (
        <Stack Htmltag={"div"}>
            <Stack Htmltag={"div"}>
                <Text Htmltag={"h1"}>{login ? 'Login' : 'Register'}</Text>
                <Text Htmltag={"span"}>{login ? 'Not Signed Up ?' : 'Already an account ?'}</Text>
                <Link href={login ? "/register" : "/login"}>{login ? 'Register' : 'Login'}</Link>
            </Stack>

            <Stack Htmltag={"div"}>
                <Form buttonHtmltag={"span"} buttonContent={login ? "Login" : "Register"} inputList={loginInputs} isLogin={login}></Form>
            </Stack>
        </Stack>
    );
}

export default Login;