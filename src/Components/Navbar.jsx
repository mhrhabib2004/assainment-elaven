import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provaider/AuthProvaider";
import swal from "sweetalert";

const Navbar = () => {
    const [isdark, setIsdark] = useState(
        JSON.parse(localStorage.getItem('isdark'))
    );
    useEffect(() => {
        localStorage.setItem('isdark', JSON.stringify(isdark));
    }, [isdark]);

    const { user, logOut } = useContext(AuthContext);
    const handelSingout = () => {
        logOut()
            .then(() => {
                swal({
                    title: "Welcome",
                    text: "Your Log out successs",
                    icon: "success",
                    dangerMode: true,
                })
            })
            .catch()

    }
    const navLinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/allbooks"}>All Books</NavLink></li>
        <li><NavLink to={"/addbook"}>Add Book</NavLink></li>
        <li><NavLink to={"/borrowedbooks"}>Borrowed Books</NavLink></li>
        <label className="cursor-pointer grid place-items-center">
            <input checked={isdark}
                onChange={() => setIsdark(!isdark)} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>

    </>
    return (
        <div data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className="navbar bg-purple-400  rounded-md animate__animated animate__swing" >
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu text-sm menu-sm dropdown-content mt-3 z-[1] p-2 shadow font-bold bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost font-bold md:text-3xl uppercase ">Trip Trekker</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-sm font-bold menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-3">

                    {
                        user?.email ? <div className="flex gap-2 items-center"><div className="w-10 rounded-full lg:tooltip lg:tooltip-left" data-tip={user?.displayName} >
                            <img className="rounded-full " alt="profile" src={user?.photoURL} />
                        </div> <button onClick={handelSingout} className="btn text-xl font-bold  btn-warning">Sign out</button></div> : <div className="flex gap-1"><Link to={"/Login"}> <button className="btn md:text-xl font-bold btn-outline">Login</button></Link> <Link to={"/Register"}><button className="btn md:text-xl font-bold btn-outline">Register</button></Link></div>
                    }

                </div>
            </div>
        </div>

    );
};

export default Navbar;