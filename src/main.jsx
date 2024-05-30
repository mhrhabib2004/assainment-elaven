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
import CategoryBook from './Components/CategoryBook.jsx';
import Borreowedbooks from './Components/Borreowedbooks.jsx';
import TimeDate from './Components/TimeDate.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        // loader:()=>fetch(`${import.meta.env.VITE_LINK}/addbook`)
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
        element: <PrivetRout><Viewleastdata></Viewleastdata></PrivetRout>,
        loader: ({params})=>fetch(`${import.meta.env.VITE_LINK}/addbook/${params.id}`)
      },
      {
        path:"/allbooks",
        element:<PrivetRout><Allbooks></Allbooks></PrivetRout>,
        // loader:()=>fetch(`${import.meta.env.VITE_LINK}/addbook`)
      },
      {
        path:"/allbooksgrid",
        element:<PrivetRout><Allbooksgrid></Allbooksgrid></PrivetRout>
      },
      {
        path:"allbookstable",
        element:<PrivetRout><Allbookstable></Allbookstable></PrivetRout>
      },
      {
        path:"category-book/:category",
        element:<PrivetRout><CategoryBook/></PrivetRout>,
        // loader:({params})=> fetch(`${import.meta.env.VITE_LINK}/addbook?category=${params.category}`)
      },
      {
        path:"/Updatebook/:id",
        element:<PrivetRout><UpdateBooks></UpdateBooks></PrivetRout>,
        loader:({params})=> fetch(`${import.meta.env.VITE_LINK}/addbook/${params.id}`)
      },
      {
        path:"/borrowpage",
        element:<PrivetRout><Borrowpage></Borrowpage></PrivetRout>,
        loader:()=> fetch(`${import.meta.env.VITE_LINK}/borrow`)
        
      },
      {
        path:"/borrowedbooks",
        element:<PrivetRout><Borreowedbooks></Borreowedbooks></PrivetRout>,
        loader: ()=> fetch(`${import.meta.env.VITE_LINK}/borrow`)
      },
      {
        path:"/time",
        element:<TimeDate></TimeDate>
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='container mx-auto'>
   <React.StrictMode>
    <AuthProvaider>
     <RouterProvider router={router} />
     </AuthProvaider>
  </React.StrictMode>,
 </div>
)
