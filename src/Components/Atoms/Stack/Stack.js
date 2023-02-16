import React from 'react';

function Stack({Htmltag, children, classCustom}) {
    // TODO - Add properties (space/divider/etc)

    return (
        <Htmltag className={classCustom}>{children}</Htmltag>
    );
}
export default Stack;