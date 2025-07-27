// components/NotFound.jsx
import { Link } from "react-router-dom";
import "./notfound.css"; // Optional: style it as you like
import Navigationbar from "./Navigation";
export default function NotFound() {
    return (
        <div>
            <Navigationbar/>
            <div className="notfound-container">

                <h1 className="notfound-title">404 - Page Not Found</h1>
                <p className="notfound-description">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <Link to="/" className="notfound-link">Go back to Home</Link>
            </div>
        </div>

    );
}
