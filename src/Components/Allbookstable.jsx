

const Allbookstable = ({book}) => {
    // console.log('table',books)
    const { image, name, author, category, rating } = book;
    return (
        <div className="overflow-x-auto items-center">
        <table className="table">
                   <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                <div className="avatar">
                    <div className="w-28 rounded">
                        <img src={image} />
                    </div>
                    </div>
    
                </div>
              </td>
              <td >
               Name : {name}
              </td>
              <td>Author : {author}</td>
              <td>Category : {category}</td>
              <td>Rating : {rating}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            
            
          </tbody>
         
         
          
        </table>
      </div>
    );
};

export default Allbookstable;




 // <div className="card lg:card-side bg-base-100 shadow-xl">
        //     <figure><img className="h-48 ml-10 mb-8 mt-7" src={image} alt="Album" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">Name : {name}</h2>
        //         <p>Author Name : {author}</p>
        //         <p>Category : {category}</p>
        //         <p>Rating : {rating}</p>
                
        //             {/* <Link className="" to={`/viewdata/${books._id}`}><button className="btn w-full text-xl btn-outline btn-secondary">Details</button></Link> */}
                
        //     </div>
        // </div>
   