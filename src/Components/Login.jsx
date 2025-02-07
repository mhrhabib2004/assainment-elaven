import { Link,useLocation,useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaGoogle,FaGithub, FaEyeSlash } from "react-icons/fa";
import swal from 'sweetalert';
import { FaEye } from "react-icons/fa6";


import { signInWithPopup } from "firebase/auth";
import { AuthContext } from "../Provaider/AuthProvaider";
import auth from "../firebase.config";
import axios from "axios";


const Login = () => {
    const { signIn,provider,gitProvider } = useContext(AuthContext);
    const [showPassword,setshowpassword]=useState(false);

    const location= useLocation();

    const navigate = useNavigate();

    console.log('location here',location)

    

    const handelLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result=>{
                const loggeduser=result.user;
                console.log(loggeduser);
                // const user ={email}
                swal({
                    title: "Welcome",
                    text: "You Loged in SuCCessfullY",
                    icon: "success",
                    dangerMode: true,
                  })
                  navigate(location?.state ? location.state : "/");

                // navigate to login
                
                // axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
                // .then(res=>{
                //     console.log(res.data)
                //     if(res.data){
                //         navigate(location?.state ? location.state : "/");

                //     }
                // })
            })
            .catch(error =>{
                swal({
                    title: "opps",
                    text: "Your Email or password worng ",
                    icon: "warning",
                    dangerMode: true,
                  })
                  navigate(location?.state ? location.state : "/Login");
                  console.log(error)
                  
            })
    }
    // if(loading){
    //    return <span className="loading loading-spinner text-primary"></span>;
      
    // }

  const handelGooglelogin= ()=>{
    signInWithPopup(auth,provider)
    .then((result)=>{
        console.log(result);
        // const loggeduser=result.user;
        // console.log(loggeduser)
        // const user ={email}
        swal({
            title: "Welcome",
            text: "You Loged in SuCCessfullY",
            icon: "success",
            dangerMode: true,
          })
          navigate(location?.state ? location.state : "/");
          
        //   axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
        //   .then(res=>{
        //       console.log(res.data)
        //       if(res.data){
        //           navigate(location?.state ? location.state : "/");

        //       }
        //   })

        // navigate(location?.state ? location.state : "/");
    })
    .catch(()=>{
        swal({
            title: "opps",
            text: "Your Email or password worng ",
            icon: "warning",
            dangerMode: true,
          })
    })
  }

    const handelGitHubLogin =()=>{
        signInWithPopup(auth,gitProvider)
        .then(()=>{
            swal({
                title: "Welcome",
                text: "You Loged in SuCCessfullY",
                icon: "success",
                dangerMode: true,
              })

            navigate(location?.state ? location.state : "/");

        })
        .catch(() =>{
            swal({
                title: "opps",
                text: "Your Email or password worng ",
                icon: "warning",
                dangerMode: true,
              })
        })
    }
    return (
        <div>
     
            
            <div className="hero min-h-screen bg-no-repeat bg-cover bg-center  mt-7 rounded-xl" style={{ backgroundImage: 'url(https://content.api.news/v3/images/bin/8791f511b22d3b0abb8b52c575bff083?width=2048)' }}>
                
                <div className="hero-content flex-col ">
                    
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-4xl text-center text-red-800 mt-1 font-bold">Login</h1>
                    <br />
                    <hr />
                    
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                <input type={showPassword?"text":"password"}
                                 name="password"
                                  placeholder="password"
                                  
                                  className="input input-bordered w-full"
                                   required />
                                   <span className="absolute top-3 right-2" onClick={()=>setshowpassword(!showPassword)}>{showPassword?<FaEyeSlash/>:<FaEye />}</span>
                                </div>
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Do not have an account? <Link to={"/Register"} className="btn btn-link">Register</Link></p>
                            < hr />
                            <div className="text-center">OR</div>
                            <hr />
                            <div className="space-x-2">
                                <button onClick={handelGooglelogin} className="btn btn-secondary "><FaGoogle/> GOOGLE</button>
                                <button onClick={handelGitHubLogin} className="btn btn-secondary "><FaGithub /> GIT HUB</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;