import React from 'react';
import Text from "../Atoms/Text";
import Link from "../Atoms/Link";
import Form from "../Organisms/Form";

function Login() {
    const loginInputs = [
        {
            key:0, content: "Email", type:"text", placeholder: "Email", htmlfor: "Email"
        },
        {
            key:1, content: "Password", type:"password", placeholder: "Password", htmlfor: "Password"
        }
    ]

    return (
        <div>
            <Text Htmltag={"h1"} content={"Login"}></Text>
            <Text Htmltag={"span"} content={"Not signed up ?"}></Text>
            <Link href={"/register"} content={"Register"}></Link>

            <Form buttonHtmltag={"span"} buttonContent={"Login"} inputList={loginInputs} isLogin={true}></Form>
        </div>
    );
}

export default Login;