import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
const Favorites = () => {

const dispatch = useDispatch()
// const favorites = useSelector(store => store.favorites)
const categories = useSelector(store => store.categories)
const images = useSelector(store => store.images)

const [category, setCategory] = useState('')

function handleSubmit() {
    console.log('category submit')
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
                    {categories.map((cat) => {
                        <option value={cat.name}>{cat.name}</option>
                    })}
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