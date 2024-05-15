// import { useLoaderData } from "react-router-dom";
import Allbookstable from "./Allbookstable";
import Allbooksgrid from "./Allbooksgrid";
import { useEffect, useState } from "react";
import axios from "axios";

const Allbooks = () => {
    const [view, setView] = useState("card");
    const [books, setBooks] = useState([]);
    // const allBooks = useLoaderData();
// const [allBooks,setallbooks]=useState();
const url=`${import.meta.env.VITE_LINK}/addbook`;
useEffect(()=>{
    axios.get(url,{withCredentials:true})
    .then(res=>{
        setBooks(res.data);
    })
})

    // Function to filter available books
    const filterAvailableBooks = () => {
        const availableBooks = books.filter(book => book.Quantity > 0);
        setBooks(availableBooks);
    };

    // Function to handle view change
    const handleViewChange = (selectedView) => {
        setView(selectedView);
    };

    // Load all books initially
    // useEffect(() => {
    //     setBooks(allBooks);
    // }, [allBooks]);

    return (
        <div className="mt-7">
            <h1 className="text-4xl font-bold text-center">ALL BOOKS</h1>

            {/* Dropdown menu for selecting view */}
            <div className="flex justify-center border-zinc-900 text-xl text-center mt-4">
                <select value={view} onChange={(e) => handleViewChange(e.target.value)}>
                    <option value="card">Card View</option>
                    <option value="table">Table View</option>
                </select>
            </div>

            {/* Filter button for available books */}
            <div className="flex justify-center mt-4">
                <button className="btn btn-primary" onClick={filterAvailableBooks}>Show available books</button>
            </div>

            {/* Render books based on view */}
            {view === "card" ? (
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-7">
                    {books.map((book) => (
                        <Allbooksgrid key={book._id} book={book}></Allbooksgrid>
                    ))}
                </div>
            ) : (
                <div className="w-[1200px] mx-auto">
                    {books.map((book) => (
                        <Allbookstable key={book._id} book={book}></Allbookstable>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Allbooks;
