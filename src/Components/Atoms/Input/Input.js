import React from 'react';

function Input({type, placeholder, inputName}) {
    // TODO - add properties
    // type - for - name - size - id - color - bgcolor - radius - placeholder - displayPlaceholder(booleen)

    return (
        <input type={type} placeholder={placeholder} name={inputName}></input>
    );
}

export default Input;