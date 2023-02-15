import React from 'react';
import Button from "../Molecules/Button";
import Input_group from "../Molecules/Input_group";
import Link from "../Atoms/Link";
import Stack from "../Atoms/Stack";
import Icon from "../Atoms/Icon";
import Text from "../Atoms/Text";

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
            return input_groups.map(data => {
                if (data.key === 1) { <Link href={"#"} /> }
            });
        }
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