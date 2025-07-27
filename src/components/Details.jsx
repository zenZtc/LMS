import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./details.css"; // Import CSS
import Navigationbar from "./Navigation";

export default function BooksDetails() {
    const [item, setItem] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const book = location.state;
        if (book) setItem(book);
    }, [location]);

    if (!item) return <h2>Loading...</h2>;

    return (<>
        <Navigationbar />
        <div className="book-details-container">
            <div className="book-cover">
                <img src={item?.coverUrl} alt={`${item?.title} cover`} />
            </div>
            <div className="book-info">
                <h1>{item?.title}</h1>
                <h3>by {item?.author} ({item?.year})</h3>
                <p className="description">{item?.description}</p>
                <p className="rating">⭐ {item?.rating}</p>
                <div className="meta">
                    <p><strong> Genre:</strong> {item?.genre}</p>
                    <p><strong> Pages:</strong> {item?.pages}</p>
                    <p><strong> Publisher:</strong> {item?.publisher}</p>
                    <p><strong> Language:</strong> {item?.language}</p>
                    <p><strong> ISBN:</strong> {item?.isbn}</p>
                </div>

                <div className="tags">
                    <strong>Tags:</strong>
                    {item?.tags?.map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                    ))}
                </div>


            </div>
        </div>
    </>

    );
}
