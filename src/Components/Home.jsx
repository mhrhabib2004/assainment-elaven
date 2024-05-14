import { useLoaderData } from "react-router-dom";

import Slider from "./Slider";
import CardCategoris from "../least4books/CardCategoris";
import Bloog from "./Bloog";
import Contact from "./Contact";


const Home = () => {
    const books=useLoaderData();
  
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