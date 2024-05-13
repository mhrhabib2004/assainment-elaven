import { useContext } from "react";
import { AuthContext } from "../Provaider/AuthProvaider";
import { Link } from "react-router-dom";


const Borrowpage = () => {
    const { user } = useContext(AuthContext);
    const handelbroowbooks = e => {
        e.preventDefault();
        const form = e.target;
        const displayName = form.displayName.value;
        const email = form.email.value;
        const date = form.date.value;
        const borroweddata = { displayName, email, date };
        console.log(borroweddata)
    }
    return (
        <div>

            <form onSubmit={handelbroowbooks} className="grid grid-cols-1  mt-5 gap-6 " method="dialog">
                <input type="text" required name="displayName" defaultValue={user?.displayName} className="input input-bordered input-secondary mx-auto w-96 " />

                <input type="email" required name="email" defaultValue={user?.email} className="input input-bordered input-secondary  mx-auto  w-96 " />

                <input type="date" required name="date" className="input input-bordered input-secondary mx-auto  w-96" />

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