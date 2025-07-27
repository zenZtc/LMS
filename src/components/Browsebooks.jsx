import { useEffect, useState } from "react"
import Navigationbar from "./Navigation"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import data from "../book_data_with_covers"
import "./category.css" // For consistent styling
import { useSelector } from "react-redux";


export default function Browsebooks() {
    const [showAllBooks, setShowAllBooks] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("");

    // Flatten all books into a single list
    const allBooks = useSelector(state => {
        const genreMap = state.books.booksByGenre;
        // Flatten all books from all genres
        return Object.values(genreMap).flat();
    });

    const filteredBooks = allBooks.filter(book =>
        book.title?.toLowerCase().includes(searchText.toLowerCase()) ||
        book.author?.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleBookClick = (book) => {
        navigate("/Details", { state: book });
    };

    useEffect(() => {
        // Show all books only on /BrowseBooks
        if (location.pathname === "/BrowseBooks") {
            setShowAllBooks(true);
        } else {
            setShowAllBooks(false);
        }
    }, [location.pathname]);

    return (
        <div>
            <Navigationbar />
            <Outlet /> {/* Will render Category component on /BrowseBooks/:category */}

            {showAllBooks && (
                <div className="category-page">
                    <h1 className="category-title">All Books</h1>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search books by title and author..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <div className="generasbookContainer">
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map((book, index) => (
                                <div
                                    key={index}
                                    className="BookCardContainer"
                                    onClick={() => handleBookClick(book)}
                                >
                                    <img src={book.coverUrl} alt={book.title || "Book Cover"} />
                                    <div className="BookOverlay">
                                        <h1>{book.title}</h1>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="no-results">No books found.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
