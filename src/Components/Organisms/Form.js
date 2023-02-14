import React from 'react';
import Button from "../Molecules/Button";
import Input_group from "../Molecules/Input_group";
import Link from "../Atoms/Link";

function Form({buttonHtmltag,buttonContent, inputList, isLogin}) {

    const input_groups =
        inputList.sort((a, b) => (a.key > b.key) ? 1 : -1).map(data =>
            <Input_group key={data.key} content={data.content} type={data.type} placeholder={data.placeholder} htmlfor={data.htmlfor}></Input_group>
        );

    const handleSubmit = e => {
        e.preventDefault()
        console.log("ah que coucou")
        console.log(buttonContent)
    }

    const displayLogin = e => {
        if(isLogin) {
            return <Link href={"/"} content={"Forgot password"}/>
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {input_groups}
            <Button Htmltag={buttonHtmltag} content={buttonContent} type={"submit"}></Button>
        </form>
    );
}

export default Form;