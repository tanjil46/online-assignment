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



const router=createBrowserRouter([


{
  path:'/',
  element:<Roots></Roots>,
  errorElement:<Errorelement></Errorelement>,
  children:[

{
  path:'/',
  element:<Home></Home>
}








  ]
}







])
















ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
