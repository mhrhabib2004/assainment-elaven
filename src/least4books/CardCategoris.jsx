
import { Link } from "react-router-dom";




const CardCategoris = ({ books }) => {
    // console.log(books)
    const allPossibleCategories = ["Thriller", "Novel","History","Drama","Sci-Fi"];
    
    return (


        <div className="mt-7">
            <h1 className="text-4xl font-bold text-center uppercase">BOOKS categories</h1>

           
            <div className="grid md:grid-cols-3 gap-5 mt-7 grid-cols-1">
                {allPossibleCategories.map((c,idx) => {
                    return(
<div key={idx}>
                    
                    <div className="card  bg-base-100 shadow-xl">
                  
                        <figure className="px-10 pt-10">
                            <img src="https://miro.medium.com/v2/resize:fit:5120/1*42ebJizcUtZBNIZPmmMZ5Q.jpeg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title uppercase"> category : {c}</h2>

                            <div className="card-actions">
                                <Link to={`/category-book/${c}`}>
                                <button  className="btn btn-primary ">see more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                    )
                })}
                
                

            </div>
          

            <div>
            

            </div>
            

        </div>




    );
};

export default CardCategoris;