import React, { useState } from 'react';
import { AppCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['lightning mcqueen']);

    const onAddCategory = (newValue) => {
        if ( categories.includes(newValue)) return ;
        setCategories([newValue, ...categories])
    }

    return (
        <>
            <h1>Gif Expert App</h1>
            <AppCategory onNewCategory={ event => onAddCategory(event)} />
            {
                categories.map( category => (
                    <GifGrid key={category} category={category}/>
                ))   
            }
        </>
    )
}

// <button onClick={onAddCategory}> Agregar </button>
