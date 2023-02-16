import React from 'react';
import Icon from "../../Atoms/Icon/Icon";
import Stack from "../../Atoms/Stack/Stack";
import Text from "../../Atoms/Text/Text";
import Button from "../Button/Button";

function Alert() {

    return (
        <Stack Htmltag={"div"}>
            <Icon name={"Icon_Eye-Hidden"}></Icon>
            <Text Htmltag={"p"}></Text>
            <Button></Button>
        </Stack>
    );
}

export default Alert;