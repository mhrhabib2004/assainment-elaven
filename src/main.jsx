import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AuthProvaider from './Provaider/AuthProvaider.jsx';
import Errorpage from './Components/Errorpage.jsx';
import Addbook from './Components/Addbook.jsx';
import Viewleastdata from './Components/Viewleastdata.jsx';
import Allbooks from './Components/Allbooks.jsx';
import Allbooksgrid from './Components/Allbooksgrid.jsx';
import Allbookstable from './Components/Allbookstable.jsx';
import UpdateBooks from './Components/UpdateBooks.jsx';
import Borrowpage from './Components/Borrowpage.jsx';
import PrivetRout from './Components/PriveteRout.jsx';
import Least4books from './Components/Least4books.jsx';
import Booksdata from './least4books/Booksdata.jsx';
import Leastbookscard from './Components/Leastbookscard.jsx';
// import Bookscategory from './Components/Bookscategory.jsx';
// import Least4books from './Components/Least4books.jsx';
// import Bookscategory from './Components/Bookscategory.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/addbook')
      },
      {
        path:"/Login",
        element:<Login></Login>
      },
      {
        path:"/Register",
        element:<Register></Register>
      },
      {
        path:"/addbook",
        element:<PrivetRout><Addbook></Addbook></PrivetRout>
      },
       {
        path:"/viewdata/:id",
        element: <Viewleastdata></Viewleastdata>,
        loader: ()=>fetch("http://localhost:5000/addbook")
      },
      {
        path:"/allbooks",
        element:<Allbooks></Allbooks>,
        loader:()=>fetch("http://localhost:5000/addbook")
      },
      {
        path:"/allbooksgrid",
        element:<Allbooksgrid></Allbooksgrid>
      },
      {
        path:"allbookstable",
        element:<Allbookstable></Allbookstable>
      },
      {
        path:"/Updatebook/:id",
        element:<UpdateBooks></UpdateBooks>,
        loader:({params})=> fetch(`http://localhost:5000/addbook/${params.id}`)
      },
      {
        path:"/borrowpage",
        element:<Borrowpage></Borrowpage>
      },
      {
        path:"/leastbook",
        element:<Least4books></Least4books>
      },
      // {
      //   path:"/Booksdata",
      //   element:<Booksdata></Booksdata>
      // }
      // {
      //   path:"/bookcard",
      //   element:<Leastbookscard></Leastbookscard>
      // }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='p-2'>
   <React.StrictMode>
    <AuthProvaider>
     <RouterProvider router={router} />
     </AuthProvaider>
  </React.StrictMode>,
 </div>
)
