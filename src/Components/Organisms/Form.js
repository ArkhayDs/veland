import React from 'react';
import Button from "../Molecules/Button";
import Input_group from "../Molecules/Input_group";
import Stack from "../Atoms/Stack";
import Input_password from "../Molecules/Input_password";

function Form({buttonHtmltag,buttonContent, inputList, isLogin}) {

    const input_groups =
        inputList.sort((a, b) => (a.key > b.key) ? 1 : -1).map(data => {
            if (data.key === 1 && data.type === "password" && isLogin === true) {
                return <Input_password key={data.key} content={data.content} type={data.type} placeholder={data.placeholder} htmlfor={data.htmlfor}/>
            } else {
                return <Input_group key={data.key} content={data.content} type={data.type} placeholder={data.placeholder} htmlfor={data.htmlfor}/>
            } }
        );

    const handleSubmit = e => {
        e.preventDefault()
        console.log("ah que coucou")
        console.log(buttonContent)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Stack Htmltag={"div"}>
                {input_groups}
            </Stack>
            <Stack Htmltag={"div"}>
                <Button Htmltag={buttonHtmltag} type={"submit"} content={buttonContent}/>
            </Stack>
        </form>
    );
}

export default Form;