import { Link } from "react-router-dom";




const Leastbookscard = ({ books }) => {
    const { image, name, author, category, rating } = books;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="h-48 ml-10 mb-8 mt-7" src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name : {name}</h2>
                <p>Author Name : {author}</p>
                <p>Category : {category}</p>
                <p>Rating : {rating}</p>
                
                    <Link className="" to={`/viewdata/${books._id}`}><button className="btn w-full text-xl btn-outline btn-secondary">Details</button></Link>
                
            </div>
        </div>
    );
    
};


export default Leastbookscard;