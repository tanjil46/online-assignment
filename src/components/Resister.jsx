
import { Link } from 'react-router-dom';
import Assin from './img/ASE-STUDY-ASSIGNMENT.jpg'

const Resister = () => {



 const SingInHandler=e=>{










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
         <p className="text-center text-xl font-bold">Sing In</p>
         </div>
         <form onSubmit={SingInHandler} className="card-body">


         <div className="form-control">
           <label className="label">
            <span className="label-text">Name</span>
           </label>
           <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
         
        </div>


        <div className="form-control">
           <label className="label">
            <span className="label-text">PhotoUrl</span>
           </label>
           <input type="text" placeholder="Your Image" name="photoUrl" className="input input-bordered" required />
         
        </div>










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
         
        </div>
         <div className="form-control mt-6">
         <button className="btn no-animation bg-gradient-to-r from-purple-500 to-pink-500">SING IN</button>
         </div>
       
        </form>
        <div className="flex ">
            <p className=''>Already Resisterd! Please Login</p>
            <Link className='btn' to='/login'>Login Now</Link>
        </div>
         </div>
        </div>
         </div>
        
        
  </div>
        
        
        
        
        
        
        
        
        
        
            </div>
          </div>
        </div>
        
        
        
        
        
        
        
        
    );
};

export default Resister;