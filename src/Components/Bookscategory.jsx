import { Link } from "react-router-dom";
// import Leastbookscard from "./Leastbookscard";

const Bookscategory = () => {
    // const categories = ['Novel', 'Thriller', 'History', 'Drama', 'Sci-Fi'];

  

    
    return (
        <div className="mt-7">

    
            <h1 className="text-4xl font-bold text-center uppercase">BOOKS categories</h1>
            <div className="grid md:grid-cols-4 gap-5 mt-7 grid-cols-1">
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title uppercase"> category : Novel</h2>
                      
                        <div className="card-actions">
                            <Link to={`/leastbook/:Novel`}><button className="btn btn-primary ">see more Novel books</button></Link>
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
                        <Link><button className="btn btn-primary">see more Thriller books</button></Link>
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
                        <Link> <button className="btn btn-primary">see more History books</button></Link>
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
                        <Link><button className="btn btn-primary">see more Drama books</button>
                        </Link>                      
                         </div>
                    </div>
                </div>

            </div>

            <div>
               
            </div>

        </div>
    );
};

export default Bookscategory;
