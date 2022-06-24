import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Search() {
    // gif data store
    const gif = useSelector(store => store.searchGif);
    // category name store
    const category = useSelector(store => store.category);

    const dispatch = useDispatch();
    const [userCategory, setUserCategory] = useState('');
    const [userSearch, setUserSearch] = useState('');

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

    // Search input change handler
    const handleSearchInput = (event) => {
        setUserSearch(event.target.value);
    }

    // When form submits, dispatch to search for a new gif.
    const searchGif = (event) => {
        // Use a `preventDefault` to keep our form from refreshing the page
        event.preventDefault();

        dispatch({
            type: 'SEARCH_GIF',
            payload: {
                userSearch,
                userCategory
            }
        })
    }

    console.log(`the gif is:`, gif);
    let gifList = gif.data || [];
    return (
        <>
            <form onSubmit={searchGif}>
                <input onChange={handleSearchInput} type="text" placeholder= "search terms"/>
                <select onChange={handleCatChange}>
                    {/* map through category */}
                    <option key="blank" value="---">---</option>
                    {category.map((cat) => (
                        <option key={cat.name} value={cat.name}>{cat.name}</option>
                    ))}
                </select>
                <button type='submit'>Search for Gif</button>
            </form>
            
                {gifList.map((gif) => {
                    return (
                        <img key={gif.id} src={gif.images.original.url} />
                    )
                })}
        </>

    )
};
export default Search;