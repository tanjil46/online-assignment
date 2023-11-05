import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './components/Roots.jsx';
import Errorelement from './components/Errorelement.jsx';
import Home from './components/HomePages.jsx/Home.jsx';
import Resister from './components/Resister.jsx';
import Login from './components/Login.jsx';
import Authprovide from './components/Authprovide.jsx';
import CreateAssingment from './components/Assignments/CreateAssingment.jsx';



const router=createBrowserRouter([


{
  path:'/',
  element:<Roots></Roots>,
  errorElement:<Errorelement></Errorelement>,
  children:[

{
  path:'/',
  element:<Home></Home>
},
{
  path:'/resister',
  element:<Resister></Resister>
  
},
{
  path:'/login',
  element:<Login></Login>
},{
 path:'/createassin',
 element:<CreateAssingment></CreateAssingment>

}








  ]
}







])
















ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Authprovide>
 <RouterProvider router={router}></RouterProvider>
 </Authprovide>
  </React.StrictMode>,
)
