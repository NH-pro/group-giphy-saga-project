// Header component that will be used throughout the App
export default function Header() {
    
    // Render the information to the DOM
    return (
        <header className="App-header">
            <h1>Giphy Search!</h1>
            <nav>
                <ul>
                    <li>Search Giphy!</li>
                    <li>See Favorites</li>
                </ul>
            </nav>
        </header>
    )
}