import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./category.css";
import { useSelector } from "react-redux";


export default function Category() {
    const { category } = useParams();
    const nav = useNavigate();
    const [books, setBooks] = useState([]);
    const [searchText, setSearchText] = useState("");

    const booksByGenre = useSelector(state => state.books.booksByGenre);

    useEffect(() => {
        const validCategories = Object.keys(booksByGenre);
        if (!validCategories.includes(category)) {
            nav("/");
            return;
        }

        setBooks(booksByGenre[category] || []);
    }, [category, booksByGenre, nav]);

    const filteredBooks = books.filter(book =>
        book.title?.toLowerCase().includes(searchText.toLowerCase()) || book.author?.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filteredBooks);
    const BooksClicked = (e, books) => {
        console.log(0, books);
        nav("/Details", { state: books });
    }
    // console.log("horror :: ", allBooks)
    return (
        <div className="category-page">
            <h1 className="category-title">{category}</h1>

            <input
                type="text"
                className="search-input"
                placeholder="Search books by title and author ...."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />

            <div className="generasbookContainer">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((item, index) => (
                        <div onClick={(e) => { BooksClicked(e, item) }} className="BookCardContainer" key={index}>
                            <img src={item.coverUrl} alt={item.title || "Book Cover"} />
                            <div className="BookOverlay">
                                <h1>{item.title}</h1>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-results">No books found.</p>
                )}
            </div>


        </div>
    );
}
