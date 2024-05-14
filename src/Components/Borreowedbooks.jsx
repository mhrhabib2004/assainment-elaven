import { useContext, useState } from "react";
import { AuthContext } from "../Provaider/AuthProvaider";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const Borreowedbooks = () => {
    const { user } = useContext(AuthContext);
    // console.log('contex data ', user.email)
    const borrowebbooks = useLoaderData();
    const [mydatalist, setmydatalist] = useState(borrowebbooks);
    // console.log(borrowebbooks)

    const userEmail = user?.email;
    const EmailData = mydatalist.filter((userData) => userData.email === userEmail);
    console.log('Filtered Data', EmailData);
    // const { image, name, author, category, rating } = ;

    const handledelete = _id => {
        console.log(_id)
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to return this book?",
            icon: "warning",
            dangerMode: true,
        })

            .then(willDelete => {
                if (willDelete) {
                    //   swal("Deleted!", "Your imaginary file has been deleted!", "success");
                    fetch(`${import.meta.env.VITE_LINK}/borrow/${_id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCoun > 0) {
                                swal({
                                    title: "thanks",
                                    text: "your Book return sucsess",
                                    icon: "sucsess",
                                    dangerMode: true,
                                })
                            }

                        })
                    const remening = mydatalist.filter(data => data._id !== _id);
                    setmydatalist(remening);
                }
            });

    }

    
    return (
       <div> 
        <h1 className=" md:text-4xl mt-6 text-lime-600 text-center font-bold">Borrowed Books : {EmailData.length}</h1>
        
        <div className="grid mt-7 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6">
        { EmailData.map(data=>(
             <div  className="card card-side bg-base-100 shadow-xl" key={data._id}>
             <figure><img className="h-48 ml-10 mb-8 mt-7" src={data.Image} alt="Album" /></figure>
             <div className="card-body">
                 <h2 className="card-title">Name : {data.Name}</h2>
                 
                 <p>Category : {data.Category}</p>
                 <p>Borrowed Date : {data.borrrowedDate}</p>
                 <p>Return date : {data.date}</p>
                 
                 <button onClick={() => handledelete(data._id)} className="btn btn-outline btn-secondary">Retrun Book</button>
                 
             </div>
         </div>

        ))}
            
    
       </div>
       </div>
    );
};

export default Borreowedbooks;