import { useLoaderData } from "react-router-dom";
// import Bookscategory from "./Bookscategory";
// import Leastbookscard from "./Leastbookscard";
import Slider from "./Slider";
import CardCategoris from "../least4books/CardCategoris";
import Bloog from "./Bloog";
// import Least4books from "./Least4books";

const Home = () => {
    const books=useLoaderData();
    // console.log(books,'ddddd')
    return (
        <div>
            <Slider></Slider>
            {/* <Bookscategory books={books}></Bookscategory> */}
            {/* <Least4books books={books}></Least4books> */}
            <CardCategoris books={books} ></CardCategoris>
            <Bloog></Bloog>

        </div>
    );
};

export default Home;