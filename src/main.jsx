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
import Assignments from './components/Assignments/Assignments.jsx';
import PrivateOfCreateAssig from './privateRoutes/PrivateOfCreateAssig.jsx';
import UpdateAssign from './components/Assignments/UpdateAssign.jsx';
import DetailsAssign from './components/Assignments/DetailsAssign.jsx';
import SubmitAssign from './components/Assignments/SubmitAssign.jsx';

import MyAssignment from './components/Assignments/MyAssignment.jsx';



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
 element:<PrivateOfCreateAssig><CreateAssingment></CreateAssingment></PrivateOfCreateAssig>

},
{
  path:'/assin',
  element:<Assignments></Assignments>
 
},
{
  path:'/update/:id',
  element:<PrivateOfCreateAssig><UpdateAssign></UpdateAssign></PrivateOfCreateAssig>,
  loader:({params})=>fetch(`https://assignment-server-side-d4wrs85qt-tanjils-projects.vercel.app/assignment/${params.id}`)
},
{
  path:'/details/:id',
  element:<PrivateOfCreateAssig><DetailsAssign></DetailsAssign></PrivateOfCreateAssig>,
  loader:()=>fetch('https://assignment-server-side-d4wrs85qt-tanjils-projects.vercel.app/assignment')
},
{
 path:'/subassin',
 element:<PrivateOfCreateAssig><SubmitAssign></SubmitAssign></PrivateOfCreateAssig>


},



{
  path:'/myassin',
  element:<PrivateOfCreateAssig><MyAssignment></MyAssignment></PrivateOfCreateAssig>
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
