import { Link, useLocation, useNavigate } from "react-router-dom";
import Assin from './img/ASE-STUDY-ASSIGNMENT.jpg'
import { useContext } from "react";
import { AuthContext } from "./Authprovide";
import Swal from "sweetalert2";
import {  FcGoogle  } from "react-icons/fc";
const Login = () => {


const{userSingIn,googleLogIn}=useContext(AuthContext)
const location=useLocation()
const navigate=useNavigate()
const loginHandler=e=>{
 
  e.preventDefault()


   
  const email=e.target.email.value
  const password=e.target.password.value
  console.log(email,password)
 

  userSingIn(email,password)
  .then((result)=>{
   console.log(result.user)
   Swal.fire(
    'Sucess!',
    'Succesfully Login',
     'success'
   )

   navigate(location?.state? location.state:'/')

 
  })
  .catch(error=>{
  console.log(error.message)
  Swal.fire(
    'Error!',
    `${error.message}`,
    'error'
  )
  })

}

const googleLogInHandler=()=>{ 
  googleLogIn()
  .then((result)=>{
     console.log(result.user)
     Swal.fire(
       'Sucess!',
       'Succesfully Login',
        'success'
      )
      navigate(location?.state? location.state:'/')
    })
    .catch(error=>{
    console.log(error.message)
     
    })
}


















    return (
      
      

               <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 flex p-20 gap-0 ">


<div className="card card-side bg-base-100 shadow-xl">
  
<div className="">
    <img className="w-[500px] h-[600px]" src={Assin}></img>
 </div>


  <div className="card-body ">
   



  <div className="">



 <div className="hero ">
 <div className="hero-content ">


 <div className="card flex-shrink-0 w-[500px] h-[600px]  bg-white">
     <div className="">
 <p className="text-center text-xl font-bold">Login Now</p>
 </div>
 <form onSubmit={loginHandler} className="card-body">
 <div className="form-control">

   <label className="label">
   </label>
  <input type="email" placeholder="email" name="email" className="input input-bordered" required />
 </div>
 <div className="form-control">
   <label className="label">
    <span className="label-text">Password</span>
   </label>
   <input type="password" placeholder="password" name="password" className="input input-bordered" required />
   <label className="label">
     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
   </label>
</div>
 <div className="form-control mt-6">
 <button className="btn no-animation bg-gradient-to-r from-purple-500 to-pink-500">LOGIN</button>
 </div>
<div className="">
 <p className="text-xl text-cyan-600 ">NEW HERE!PLEASE RESISTER
   <Link className="btn" to='/resister'>Resister Here</Link>
 
 </p>

</div>

</form>

 <p className="">Or Login With</p>
 <button onClick={googleLogInHandler} className="btn no-animation text-2xl bg-slate-800"><FcGoogle></FcGoogle></button>






</div>
</div>
 </div>













 </div>










    </div>
  </div>
</div>









          





    );
};

export default Login;