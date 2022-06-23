import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function Search() {
    const dispatch = useDispatch();
    const [category, setCategory] = useState('')

    const handleCatChange = (event) => {
        setCategory(event.target.value);
    }

    const searchGif = () => {
        dispatch({
            type: 'SEARCH_GIF',
            payload: category
        })
    }


    return (
        <>
            <form onSubmit={searchGif}>
                <select onChange={handleCatChange} id="cat_dropdown" name="cat_dropdown">
                    {category.map((cat) => (
                        <option value={cat.name}>{cat.name}</option>
                    ))}
                </select>
                <button type='submit'>Search for Gif</button>
            </form>

        </>
    )
};
export default Search;