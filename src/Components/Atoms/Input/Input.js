import React from 'react';

function Input({type, placeholder, inputName}) {

    return (
        <input type={type} placeholder={placeholder} name={inputName}></input>
    );
}

export default Input;