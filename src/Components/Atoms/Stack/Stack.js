import React from 'react';

function Stack({Htmltag, children, classCustom}) {

    return (
        <Htmltag className={classCustom}>{children}</Htmltag>
    );
}
export default Stack;