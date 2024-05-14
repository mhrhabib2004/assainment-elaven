import { useContext } from "react";
import { AuthContext } from "../Provaider/AuthProvaider";
import { useLoaderData } from "react-router-dom";

import moment from "moment";



const Borrowpage = ({ Book }) => {
    const borrowbooksdata = useLoaderData();
    console.log(borrowbooksdata);
    const { _id,image,name,category } = Book;

    const { user } = useContext(AuthContext);
    const handelbroowbooks = e => {
        e.preventDefault();
        const form = e.target;
        const Booksid = _id;
        const displayName = form.displayName.value;
        const email = form.email.value;
        const date = form.date.value;
        const borrrowedDate=form.borrrowedDate.value;

        const Image=image;
        const Name =name;
        const Category = category;
        const borroweddata = { Image,Name,Category,Booksid, displayName, email, date,borrrowedDate };
        console.log(borroweddata)
        fetch(`${import.meta.env.VITE_LINK}/borrow`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(borroweddata),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })

    }
    return (
        <div>

            <form onSubmit={handelbroowbooks} className="grid grid-cols-1  mt-4 gap-6 " method="dialog">
                
                <label className="form-control mx-auto  w-96">
                    <div className="label">
                        <span className="label-text">User name</span>
                        
                    </div>
                    <input type="text" required name="displayName" defaultValue={user?.displayName} className="input input-bordered input-secondary " />
                </label>
                <label className="form-control mx-auto  w-96">
                    <div className="label">
                        <span className="label-text">User Email</span>
                        
                    </div>
                    <input type="email" required name="email" defaultValue={user?.email} className="input input-bordered input-secondary " />
                </label>

                <label className="form-control mx-auto  w-96">
                    <div className="label">
                        <span className="label-text">Return date</span>
                        
                    </div>
                    <input type="date" required name="date" className="input input-bordered input-secondary " />
                </label>
               
                   <div>
                   
                    <input type="text" value={moment().format("MMM Do YY") } placeholder="update"  name="borrrowedDate" className="input hidden input-bordered input-secondary " />
                    </div>
                
                
                <input type="submit" className="btn btn-outline btn-secondary w-96 mx-auto" value=" Submit" />

            </form>
            <div className="modal-action">
                <form method="dialog">

                    <button className="btn btn-warning">Breck</button>
                </form>
            </div>
        </div>
    );
};

export default Borrowpage;