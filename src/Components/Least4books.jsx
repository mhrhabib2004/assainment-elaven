import { useEffect, useState } from "react";
import Leastbookscard from "./Leastbookscard";

const Least4books = () => {
    const [books, setbooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/addbook')
            .then(res => res.json())
            .then(data => setbooks(data))
    }, [])

    // console.log(books,'vvvvv')
    // const categories = ['Novel', 'Thriller', 'History', 'Drama', 'Sci-Fi'];
   

   
    return (
        <div className="mt-7">
            <h1 className="text-4xl font-bold text-center">BOOKS</h1>
            {/* <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {
                    books.map(book=><Leastbookscard key={book._id} book={book}></Leastbookscard>)
                }
            </div> */}

        </div>
    );
};

export default Least4books;