import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
const Favorites = () => {
    
const favorites = useSelector(store => store.favorites)
const categories = useSelector(store => store.categories)
function handleSubmit() {
    console.log()
}


    return (
        <div>
            <h2 className='favorites-title'>Favorites</h2>
            <form onSubmit={handleSubmit}>
                <select id='categories-select'>
                    {categories.map((cat) => {
                        <option value={cat.name}>{cat.name}</option>
                    })}
                </select>
                <button type='submit'>Search</button>
            </form>
            <section className='image-gallery'>
            {favorites.map((fav) => {
            return (
                <img key={fav.id} id={fav.id} src={fav.url}/>
            )
        })}
            </section>
       
        </div>
        

    )
}

export default Favorites