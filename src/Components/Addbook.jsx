import swal from "sweetalert";

const Addbook = () => {
    const handeleaddbook = e =>{
        e.preventDefault();
        const form=e.target;
        const image =form.image.value;
        const name=form.name.value;
        const Quantity=form.Quantity.value;
        const author=form.author.value;
        const category=form.category.value;
        const rating=form.rating.value;
        const description=form.description.value;

        const booksData={image,name, Quantity ,author,category,rating,description};
        console.log(booksData)

        fetch(`${import.meta.env.VITE_LINK}/addbook`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
                
            },
            body:JSON.stringify(booksData),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.insertedId){
                swal({
                    title: "WoW",
                    text: "You added books successfully",
                    icon: "success",
                    confirmaButtonText:'cool'
                  })
            }
        })
     }

    return (
        <div>
            <h1 className="text-center text-3xl font-extrabold"> <span className="text-red-600">Add </span><span className="text-green-900">Book</span></h1>
            {/* from here */}
            <form onSubmit={handeleaddbook} className="card-body">
                <div className="grid gap-4 mt-7 w-4/5 mx-auto md:grid-cols-2">
                    <div>
                        <div className="label">
                            <span className="label-text"> image URL</span>
                        </div>
                        <input type="text" required name="image" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <div className="label">
                            <span className="label-text">Book Name</span>
                        </div>
                        <input type="text" required name="name" placeholder="Book Name" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <div className="label">
                            <span className="label-text">Quantity of the book</span>
                        </div>
                        <input type="number" required name="Quantity" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <div className="label">
                            <span className="label-text">Author Name</span>
                        </div>
                        <input type="text" required name="author" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <div className="label ">
                            <span className="label-text w-full">category</span>
                        </div>
                        <input type="text" required name="category" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <div className="label">
                            <span className="label-text">Rating</span>
                        </div>
                        <input type="number" required name="rating" placeholder="Type here" className="input input-bordered w-full" min="1" max="5" />
                    </div>


                </div>
                <div className="w-4/5 mx-auto">
                    <div className="label">
                        <span className="label-text">short description</span>
                    </div>
                    <textarea name="description" placeholder="description" className="textarea textarea-bordered textarea-sm w-full " ></textarea>
                    <div>

                        <input className="btn mt-4 btn-success  w-full" type="submit" value="Add" />
                    </div>
                </div>
            </form>
        </div>

    );
};

export default Addbook;