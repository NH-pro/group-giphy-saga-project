import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
const Favorites = () => {

const dispatch = useDispatch()
// const favorites = useSelector(store => store.favorites)
const categories = useSelector(store => store.category)
const images = useSelector(store => store.gifArray)

const [category, setCategory] = useState('')

useEffect(() => {
    console.log(`Grabbing Category names from DB`);
    console.log(images)
    dispatch({
        type: 'GET_CATEGORY_NAMES'
    })
}, [])

function handleSubmit(evt) {
    evt.preventDefault()
    console.log('category submit, "')
    dispatch({
        type: "SET_FAVORITE_GALLERY",
        payload: category
    })
}



    return (
        <div>
            <h2 className='favorites-title'>Favorites</h2>
            <form onSubmit={handleSubmit}>
                <select id='categories-select' onChange={evt => setCategory(evt.target.value)}>
                {/* Set a blank input value to get all `Favorite` gifs. Set the value to `all` --> checked against on the server */}
                <option key="blank" value="all">---</option>
                {/* map through category */}
                {categories.map((cat) => (
                        <option key={cat.name} value={cat.name}>{cat.name}</option>
                    ))}
                </select>
                <button type='submit'>Search</button>
            </form>
            <section className='image-gallery'>
            {images.map((fav) => {
            return (
                <img key={fav.id} id={fav.id} src={fav.url}/>
            )
        })}
            </section>
       
        </div>
        

    )
}

export default Favorites