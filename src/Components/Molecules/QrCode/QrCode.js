import React from 'react';
import Stack from "../../Atoms/Stack/Stack";
import Image from "../../Atoms/Image/Image";
import Text from "../../Atoms/Text/Text";

function QrCode() {
    return (
        <Stack Htmltag={"div"} classCustom="Qr_Container">
            <Image name={"QrCode"}/>
            <Stack Htmltag={"div"} classCustom="Qr_infos">
                <Text Htmltag={"h2"}>Connecting with your phone ?</Text>
                <Text Htmltag={"p"}>Scan the Qr code</Text>
            </Stack>
        </Stack>
    );
}

export default QrCode;