import React from 'react';
import Icon from "../Atoms/Icon";
import Text from "../Atoms/Text";
import Button from "./Button";
import Stack from "../Atoms/Stack";

function Alert(props) {
    // TODO - Add properties
    // type (success/error/warning/infos) - color - bgcolor - float - buttons

    return (
        <Stack Htmltag={"div"}>
            <Icon name={"Icon_Eye-Hidden"}></Icon>
            <Text Htmltag={"p"}></Text>
            <Button></Button>
        </Stack>
    );
}

export default Alert;