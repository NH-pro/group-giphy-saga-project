import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Search() {
    // gif data store
    const gif = useSelector(store => store.gif);
    // category name store
    const category = useSelector(store => store.category);

    const dispatch = useDispatch();
    const [userCategory, setUserCategory] = useState('')

    console.log('userCategory', userCategory);
    // On page load, dispatch to index saga to fetch cat names.
    useEffect(() => {
        console.log(`Grabbing Category names from DB`);
        dispatch({
            type: 'GET_CATEGORY_NAMES'
        })
    }, [])

    // Dropdown selector change handler
    const handleCatChange = (event) => {
        setUserCategory(event.target.value);
    }

    // When form submits, dispatch to search for a new gif.
    const searchGif = (event) => {
        // Use a `preventDefault` to keep our form from refreshing the page
        event.preventDefault();
        dispatch({
            type: 'SEARCH_GIF',
            payload: userCategory
        })
    }


    return (
        <form onSubmit={searchGif}>
            <select onChange={handleCatChange}>
                {/* map through category */}
                <option key="blank" value="---">---</option>
                {category.map((cat) => (
                    <option key={cat.name} value={cat.name}>{cat.name}</option>
                ))}
            </select>
            <button type='submit'>Search for Gif</button>
        </form>
    )
};
export default Search;