import React from 'react';

function Icon({name}) {

    return (
        <>
            <img src={require(`../../../assets/images/${name}.png`)} alt="icon"/>
        </>
    );
}

export default Icon;