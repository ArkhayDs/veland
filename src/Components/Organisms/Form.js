import React from 'react';
import Button from "../Molecules/Button";
import InputGroup from "../Molecules/InputGroup";
import Stack from "../Atoms/Stack";
import InputPassword from "../Molecules/InputPassword";

function Form({buttonHtmltag,buttonContent, inputList, isLogin}) {

    const input_groups =
        inputList.sort((a, b) => (a.key > b.key) ? 1 : -1).map(data => {
            if (data.key === 1 && data.type === "password" && isLogin === true) {
                return <InputPassword key={data.key} content={data.content} type={data.type} placeholder={data.placeholder} htmlfor={data.htmlfor} inputName={data.name}/>
            } else {
                return <InputGroup key={data.key} content={data.content} type={data.type} placeholder={data.placeholder} htmlfor={data.htmlfor} inputName={data.name}/>
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