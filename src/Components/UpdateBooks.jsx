

const UpdateBooks = () => {
    const handeleupdate = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const bookname = form.bookname.value;
        const author = form.author.value;
        const category = form.category.value;
        const rating = form.rating.value;


        const booksData = { photo, bookname, author, category, rating };
        console.log(booksData)
    }
    return (
        <div>
            <h1 className="text-center text-3xl font-extrabold"> <span className="text-red-600">UPDATE </span><span className="text-green-900">Book</span></h1>
            {/* from here */}
            <form onSubmit={handeleupdate} className="card-body">
                <div className="grid gap-4 mt-7 w-4/5 mx-auto md:grid-cols-2">
                    <div>
                        <div className="label">
                            <span className="label-text"> image URL</span>
                        </div>
                        <input type="text" required name="photo" placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div>
                        <div className="label">
                            <span className="label-text">Book Name</span>
                        </div>
                        <input type="text" required name="bookname" placeholder="Book Name" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <div className="label">
                            <span className="label-text">Author Name</span>
                        </div>
                        <input type="text" required name="author" placeholder="Type here" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <div className="label">
                            <span className="label-text">Rating</span>
                        </div>
                        <input type="number" required name="rating" placeholder="Type here" className="input input-bordered w-full" min="1" max="5" />
                    </div>

                    


                </div>
                <div className="w-4/5 mx-auto">
                <div>
                        <div className="label">
                            <span className="label-text w-full">Category</span>
                        </div>
                        <select required name="category" className="select select-bordered w-full">
                            
                            <option value="Novel">Novel</option>
                            <option value="Thriller">Thriller</option>
                            <option value="History">History</option>
                            <option value="Drama">Drama</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                            
                        </select>
                    </div>
                    <div>


                        <input className="btn mt-4 btn-success  w-full" type="submit" value="Add" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateBooks;