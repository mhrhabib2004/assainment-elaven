import { useLoaderData, useParams } from "react-router-dom";
import Borrowpage from "./Borrowpage";
// import { useEffect, useState } from "react";
// import axios from "axios";

const Viewleastdata = () => {
    const books = useLoaderData();
    // console.log(books);
    // const [books,setbooks]=useState([]);
    const { id } = useParams(books);
    
   
    // const url=`${import.meta.env.VITE_LINK}/addbook/${id}`;
// useEffect(()=>{
//     axios.get(url)
//     .then(res=>{
//         setbooks(res.data);
//     })
// })
// console.log(id,'dddddddd')
    // console.log(id);
    console.log(books,'ffffff')
    // const Book = books.find((Books) => Books._id === id);
    // console.log(Book);
    const { image, name, author, category, rating, quantity, description, } = books;
    return (
        <div className="card mt-7  lg:card-side bg-base-100 shadow-xl">
            <figure><img className="ml-5 h-56 mb-5 mt-5" src={image} alt="Album" /></figure>
            <div className="card-body ">
                <h2 className="card-title">Name : {name}</h2>
                <p>Author : {author}</p>
                <p>Category : {category}</p>
                <p>Quantity : {quantity}</p>
                <p>Rating : {rating}</p>
                <p>Bescription : {description}</p>
                {/* <p className="w-1/2">Contents : {contents}</p> */}

                <div className="w-full ">
                    {/* <Link onClick={() => document.getElementById('my_modal_4').showModal()} ><button className="btn btn-outline btn-accent "   >Borrow</button></Link> */}

                    <button className="btn btn-outline btn-success" onClick={() => document.getElementById('my_modal_4').showModal()}>Borrow</button>
                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box w-1/2 max-w-5xl">
                            <h3 className="font-bold text-lg text-center uppercase">give here your information</h3>
                            <div className="mt-5 ">
                                <Borrowpage books={books}></Borrowpage>

                                </div>
                            
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Viewleastdata;