import { useLoaderData } from "react-router-dom";

import Slider from "./Slider";
import CardCategoris from "../least4books/CardCategoris";
import Bloog from "./Bloog";
import Contact from "./Contact";
import { useEffect, useState } from "react";
import axios from "axios";



const Home = () => {
    // const books=useLoaderData();
    const [books,setBooks]=useState([]);
    const url=`${import.meta.env.VITE_LINK}/addbook`
    useEffect(()=>{
        axios.get(url,{withCredentials:true})
        .then(res=>{
            setBooks(res.data);
        })
    })
  
    return (
        <div>
            <Slider></Slider>
           
            <CardCategoris books={books} ></CardCategoris>
            
            <Bloog></Bloog>
            <Contact></Contact>

        </div>
    );
};

export default Home;