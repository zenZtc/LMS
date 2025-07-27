import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/bookSlice";
import { useNavigate } from "react-router-dom";
import Navigationbar from "./Navigation";
import "./addbook.css";

export default function AddBook() {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        year: "",
        genre: "",
        coverUrl: "",
        description: "",
    });
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        for (const field in formData) {
            if (!formData[field]) {
                newErrors[field] = "This field is required";
            }
        }

        // ✅ Additional check for 'year'
        const year = parseInt(formData.year);
        if (!isNaN(year)) {
            if (year < 1300 || year > 2025) {
                newErrors.year = "Year must be between 1300 and 2025";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        dispatch(addBook(formData));
        navigate("/BrowseBooks"); // Redirect to BrowseBooks
    };

    return (
        <>
            <Navigationbar />
            <div className="addbook-form-container">

                <h2>Add a New Book</h2>
                <form onSubmit={handleSubmit} className="addbook-form">
                    {["title", "author", "year", "coverUrl", "description"].map((field) => (
                        <div key={field} className="form-group">
                            <label>{field[0].toUpperCase() + field.slice(1)}</label>
                            <input
                                type={field === "year" ? "number" : "text"}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                            />
                            {errors[field] && <p className="error-text">{errors[field]}</p>}
                        </div>
                    ))}

                    {/* Genre dropdown */}
                    <div className="form-group">
                        <label>Genre</label>
                        <select name="genre" value={formData.genre} onChange={handleChange}>
                            <option value="">Select a genre</option>
                            {[
                                "Historical Fiction", "Horror", "Romance", "Thriller",
                                "Mystery", "Fantasy", "Science Fiction", "Fiction"
                            ].map((genre) => (
                                <option key={genre} value={genre}>{genre}</option>
                            ))}
                        </select>
                        {errors.genre && <p className="error-text">{errors.genre}</p>}
                    </div>

                    <button type="submit">Add Book</button>
                </form>
            </div>
        </>

    );
}
