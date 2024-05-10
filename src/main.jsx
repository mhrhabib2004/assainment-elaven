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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
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
        element:<Addbook></Addbook>
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
      }
   
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
