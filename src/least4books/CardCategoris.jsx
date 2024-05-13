
import { Link } from "react-router-dom";
import Leastbookscard from "../Components/Leastbookscard";
import Booksdata from "./Booksdata";



const CardCategoris = ({ books }) => {
    console.log(books)

    return (


        <div className="mt-7">
            <h1 className="text-4xl font-bold text-center uppercase">BOOKS categories</h1>

            {
                        books.filter(j => j.category === 'Novel').map(book => <Booksdata key={book._id} book={book} ></Booksdata>)
                    }
            <div className="grid md:grid-cols-4 gap-5 mt-7 grid-cols-1">
                <div>
                    
                    <div className="card  bg-base-100 shadow-xl">
                  
                        <figure className="px-10 pt-10">
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title uppercase"> category : Novel</h2>

                            <div className="card-actions">
                                {/* <button  className="btn btn-primary ">see more Novel books</button> */}
                                <Link to={"/Booksdata"}>see more Novel</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title uppercase"> category : Thriller</h2>

                        <div className="card-actions">
                            <button className="btn btn-primary">see more Thriller books</button>
                        </div>
                    </div>
                </div>
                {/* 3 */}

                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title uppercase"> category : History</h2>

                        <div className="card-actions">
                            <button className="btn btn-primary">see more History books</button>
                        </div>
                    </div>
                </div>
                {/* 4 */}
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="uppercase card-title"> category : Drama</h2>

                        <div className="card-actions">
                            <button className="btn btn-primary">see more Drama books</button>

                        </div>
                    </div>
                    
                </div>
                

            </div>
          

            <div>
            

            </div>
            

        </div>




    );
};

export default CardCategoris;