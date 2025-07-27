import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/HomePage"
import Browsebooks from "./components/Browsebooks"
import Category from "./components/Category"
import BooksDetails from "./components/Details"
import NotFound from "./components/NotFound"
import AddBook from "./components/Addbook"



export default function App() {
  return <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/BrowseBooks" element={<Browsebooks/>} >
            <Route path=":category" element = {<Category/>}/>
        </Route>
        <Route path="/Details" element = {<BooksDetails/>}/>
        <Route path="/AddBook" element={<AddBook />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  </>
}