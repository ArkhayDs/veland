import React, {useState} from 'react';
import Text from "../Atoms/Text/Text";
import Form from "../Organisms/Form/Form";
import Stack from "../Atoms/Stack/Stack";
import QrCode from "../Molecules/QrCode/QrCode";

function Login() {
    const [login, setLogin] = useState(true)

    const loginInputs = [
        {
            key: 0, content: "Email", type: "text", placeholder: "Email", htmlfor: "Email", name: "Email"
        },
        {
            key: 1, content: "Password", type: "password", placeholder: "Password", htmlfor: "Password", name: "Password"
        }
    ]

    const handleClick = e => {
        setLogin(!login)
    }

    return (
        <section className={"Identification"}>
            <Stack Htmltag={"div"} classCustom={"From_Container"}>
                <Stack Htmltag={"div"} classCustom={"Form_Infos"}>
                    <Text Htmltag={"h1"}>{login ? 'Login' : 'Register'}</Text>
                    <Text Htmltag={"p"}>{login ? 'Not Signed Up ?' : 'Already an account ?'} <span onClick={() => handleClick()}>{login ? 'Register' : 'Login'}</span></Text>
                </Stack>

                <Stack Htmltag={"div"}>
                    <Form buttonHtmltag={"span"} buttonContent={login ? "Login" : "Register"} inputList={loginInputs} isLogin={login}></Form>
                </Stack>
            </Stack>
            <QrCode/>
        </section>
    );
}

export default Login;