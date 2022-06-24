// Import the `Link` component
import { Link } from "react-router-dom"

// Header component that will be used throughout the App
export default function Header() {
    
    // Render the information to the DOM
    return (
        <header className="App-header">
            <h1>Giphy Search!</h1>
            <nav>
                <ul>
                    <Link to="/">Search Giphy!</Link>
                    <Link to="/favorites">See Favorites</Link>
                </ul>
            </nav>
        </header>
    )
}