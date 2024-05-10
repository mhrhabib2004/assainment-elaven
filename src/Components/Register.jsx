import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import swal from "sweetalert";
import { AuthContext } from "../Provaider/AuthProvaider";


const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [success, setsuccess] = useState('');
    const [RegistrationError, setRegistrationError] = useState('');
    const [showPassword, setshowpassword] = useState(false);

    const location = useLocation();

    const navigate = useNavigate();

    const handelRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo')
        const password = form.get('password');
        console.log(name, email, password, photo);


        if (password.length < 6) {
            setRegistrationError('Enter 6 or more password');
            return;

        }

        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])/
        .test(password)) {
            setRegistrationError('you need to use a capittal and special ');
            return;
        }

        // recet error
        setRegistrationError('');
        setsuccess('');

        createUser(email, password)
            .then(result => {
                navigate(location?.state ? location.state : "/");
                updateUserProfile(name, photo)
                    .then(() => {
                        console.log(result.user)
                        swal({
                            title: "Welcome",
                            text: "You are registration completed",
                            icon: "success",
                            dangerMode: true,
                        })
                        return;
                    })
            })
            .catch(error => {
                swal({
                    title: "opps",
                    text: "You already registered please login",
                    icon: "warning",
                    dangerMode: true,
                })
            })
    }
    // crate user

    return (


        <div>

            <div className="hero min-h-screen bg-base-200 mt-7 bg-no-repeat bg-cover bg-center  rounded-xl" style={{ backgroundImage: 'url(https://blog.flyticket.com.bd/wp-content/uploads/2020/05/image007.jpg)' }}>

                <div className="hero-content flex-col ">
                    <div className="text-center">

                    </div>

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-4xl font-bold text-center text-red-700 mt-1">Register now!</h1>
                        <br />
                        <hr />
                        <form onSubmit={handelRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative ">
                                    <input type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered w-full"
                                        required />
                                    <span className="absolute top-3 right-2" onClick={() => setshowpassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash /> : <FaEye />
                                        }
                                    </span>
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p>If you have an account? <Link to={"/Login"} className="btn btn-link">Login</Link></p>
                            {
                                RegistrationError && <p className="text-sm text-red-500">{RegistrationError}</p>
                            }



                        </form>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Register;