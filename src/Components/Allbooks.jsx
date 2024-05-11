
import { useLoaderData } from "react-router-dom";
import Allbookstable from "./Allbookstable";
import Allbooksgrid from "./Allbooksgrid";
import { useState } from "react";



const Allbooks = () => {
    const [view, setView] = useState("card"); 
    const books = useLoaderData();

    const handleViewChange = (selectedView) => {
        setView(selectedView); 
    };

    return (
        <div className="mt-7">
            <h1 className="text-4xl font-bold text-center">ALL BOOKS </h1>

            {/* Dropdown menu for selecting view */}
            <div className="flex justify-center border-zinc-900 text-xl text-center mt-4">
                <select value={view} onChange={(e) => handleViewChange(e.target.value)}>
                    <option  value="card">Card View</option>
                    <option value="table">Table View</option>
                </select>
            </div>

            
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