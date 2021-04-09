
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['adventur time']);

    /*const handleAdd = ( ) => {
    //setcategories ([...categories, 'pokemon']); //aqui aparece de ultimo en la lista
    //setcategories (['pokemon', ...categories]);  //aqui aparece de primero en la lista
     */

    //setCategories ( cats => [...cats, 'inputValue']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => (

                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                    )

                }
            </ol>
        </>
    )

}

