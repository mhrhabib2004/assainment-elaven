import { useLoaderData, useParams } from "react-router-dom";
import Borrowpage from "./Borrowpage";

const Viewleastdata = () => {
    const books = useLoaderData();
    // console.log(books);
    const { id } = useParams(books);
    // console.log(id);
    const Book = books.find((Books) => Books._id === id);
    // console.log(Book);
    const { image, name, author, category, rating, quantity, description, contents } = Book;
    return (
        <div className="card mt-7  lg:card-side bg-base-100 shadow-xl">
            <figure><img className="ml-5 h-56 mb-5 mt-5" src={image} alt="Album" /></figure>
            <div className="card-body ">
                <h2 className="card-title">Name : {name}</h2>
                <p>Author : {author}</p>
                <p>Category : {category}</p>
                <p>Quantity : {quantity}</p>
                <p>Rating : {rating}</p>
                <p>Bescription : {description}</p>
                <p className="w-1/2">Contents : {contents}</p>

                <div className="w-full ">
                    {/* <Link onClick={() => document.getElementById('my_modal_4').showModal()} ><button className="btn btn-outline btn-accent "   >Borrow</button></Link> */}

                    <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Borrow</button>
                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box w-1/2 max-w-5xl">
                            <h3 className="font-bold text-lg text-center">Hello!</h3>
                            <div className="mt-5 ">
                                <Borrowpage Book={Book}></Borrowpage>

                                </div>
                            
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Viewleastdata;