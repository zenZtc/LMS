import { Navigate, useNavigate } from "react-router-dom"
import "./navigation.css"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export default function Navigationbar() {
    const [state, setstate] = useState(false);
    const nav = useNavigate();
    const location = useLocation();
    const [details, setdetails] = useState(true);
    const [home, sethome] = useState(true);
    // const [,]
    // const 
    useEffect(() => {
        if (location.pathname == "/Details" ) {
            setdetails(true)
            sethome(false)
        } else if (location.pathname == "/") {
            setdetails(false)
            sethome(true)
        } else {
            setdetails(false)
            sethome(false)
        }
    }, [location])
    console.log(location.pathname)
    return <>
        <div className="Navcontainer">
            <div className="HeaderName">
                <h1>Online Library System</h1>
            </div>
            <div className="LinksDiv">
                {
                    !home && <div className={`${state ? "shrink" : null}`} onClick={() => { nav("/"); }}>
                        <p>Home</p>
                    </div>
                }
                {
                    <div className={`${state ? "shrink" : null}`} onClick={() => { nav("/BrowseBooks"); }}>
                        <p>Browse books</p>
                    </div>
                }
                <div className={`${state ? "shrink" : null}`} onClick={() => { nav("/AddBook"); }}>
                    <p>Add books</p>
                </div>
            </div>
        </div>
    </>
}