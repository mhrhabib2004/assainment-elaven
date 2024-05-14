import { Link } from "react-router-dom";


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
              <Link to={`/Updatebook/${book._id}`}><button className="btn btn-outline btn-accent">Update</button></Link>
              </th>
            </tr>
            
            
          </tbody>
         
         
          
        </table>
      </div>
    );
};

export default Allbookstable;
