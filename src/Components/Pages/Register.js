import React from 'react';
import Text from "../Atoms/Text";
import Link from "../Atoms/Link";
import Form from "../Organisms/Form";

function Register() {
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
            <Text Htmltag={"h1"} content={"Register"}></Text>
            <Text Htmltag={"span"} content={"Already an account ?"}></Text>
            <Link href={"/login"} content={"Sign In"}></Link>


            <Form buttonHtmltag={"span"} buttonContent={"Register"} inputList={loginInputs} isLogin={false}></Form>
        </div>
    );
}

export default Register;