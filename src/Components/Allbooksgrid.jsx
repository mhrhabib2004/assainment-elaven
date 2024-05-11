import { Link } from "react-router-dom";


const Allbooksgrid = ({book}) => {
    // console.log('grid',books)
    const { image, name, author, category, rating } = book;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="h-48 ml-10 mb-8 mt-7" src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name : {name}</h2>
                <p>Author Name : {author}</p>
                <p>Category : {category}</p>
                <p>Rating : {rating}</p>
                
                <Link to={`/Updatebook/${book._id}`}><button className="btn btn-outline btn-accent">Update</button></Link>
                
            </div>
        </div>
      
    );
};

export default Allbooksgrid;