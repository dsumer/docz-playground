import React from 'react';

interface IProps {
    text: string;
}

const Button = (props: IProps) => {
    return (
        <button>{props.text}</button>
    );
}

export default Button;