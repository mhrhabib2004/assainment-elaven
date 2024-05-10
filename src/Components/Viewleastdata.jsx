import { useLoaderData, useParams } from "react-router-dom";

const Viewleastdata = () => {
    const books = useLoaderData();
    console.log(books);
    const { id } = useParams(books);
    console.log(id);
    const Book = books.find((Books) => Books._id === id);
    console.log(Book);
    const { image, name, author, category, rating, quantity, description, contents } = Book;
    return (
        <div className="card mt-7  lg:card-side bg-base-100 shadow-xl">
            <figure><img className="ml-5 mb-5 mt-5" src={image} alt="Album" /></figure>
            <div className="card-body ">
                <h2 className="card-title">Name : {name}</h2>
                <p>Author : {author}</p>
                <p>Category : {category}</p>
                <p>Quantity : {quantity}</p>
                <p>Rating : {rating}</p>
                <p>Bescription : {description}</p>
                <p className="w-1/2">Contents : {contents}</p>
                
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default Viewleastdata;