import React from 'react';

function Input({type, placeholder}) {
    // TODO - add properties
    // type - for - name - size - id - color - bgcolor - radius - placeholder - displayPlaceholder(booleen)

    return (
        <input type={type} placeholder={placeholder}></input>
    );
}

export default Input;