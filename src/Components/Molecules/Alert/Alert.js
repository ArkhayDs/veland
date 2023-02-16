import React from 'react';
import Icon from "../../Atoms/Icon/Icon";
import Stack from "../../Atoms/Stack/Stack";
import Text from "../../Atoms/Text/Text";
import Button from "../Button/Button";
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