
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const CategoryBook = () => {
    // const catebooks = useLoaderData();
    const [catebooks,setcatebooks]=useState([]);
    const { category } = useParams();
    const url=`${import.meta.env.VITE_LINK}/addbook?/category=${category}`;
    useEffect(()=>{
        axios.get(url,{withCredentials:true})
        .then(res=>{
            setcatebooks(res.data);
        })
    })

    console.log(catebooks,'load data')
    // const { category } = useParams();
    // console.log(category,'params teke' )

    const Book = catebooks.filter((Books) => Books.category === category);
    // console.log(Book, "cateory");

    return (
        <div className="grid lg:grid-cols-3 mt-7 md:grid-cols-2 grid-cols-1 gap-6 ">
            {
                Book?.map(book => (
                    <div className='card lg:card-side  bg-base-100 shadow-xl' key={book._id} >
                        <figure><img className="h-44  ml-10 mb-8 mt-7" src={book.image} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Name : {book.name} </h2>
                            <p>Author Name : {book.author} </p>
                            <p>Categori : {book.category}</p>

                            <p>Rating : {book.rating} </p>

                            <Link className="" to={`/viewdata/${book._id}`}><button className="btn w-full text-xl btn-outline btn-secondary">Details</button></Link>

                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default CategoryBook;