import Navigationbar from "./Navigation";
import "./HomePage.css";
import data from "../book_data_with_covers";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const nav = useNavigate();
    return (
        <div className="HomeContainer">
            <Navigationbar />
            <h1>select the genres</h1>
            <div className="HomeMaincontainer">
                
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="GenreContainer"
                        style={{
                            backgroundImage: `url(${item.genreCover || item.books[0].coverUrl})`
                        }}
                        onClick={()=>{nav("/BrowseBooks/"+item.genre)}}
                    >
                        <div className="insideGenre">
                            <h1>{item.genre}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
