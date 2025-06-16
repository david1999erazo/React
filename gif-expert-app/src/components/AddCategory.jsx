import React, { useState } from "react";

export const AppCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const inputClear = inputValue.trim()

        if(inputClear <= 1) {
            return;
        }
        onNewCategory( inputClear )
        setInputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={onInputChange} >
            </input>
        </form>
    )
}