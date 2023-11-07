
import { Link } from 'react-router-dom';
import Assin from './img/ASE-STUDY-ASSIGNMENT.jpg'
import { useContext } from 'react';
import { AuthContext } from './Authprovide';
import Swal from 'sweetalert2';

const Resister = () => {


const{createUser}=useContext(AuthContext)






 const SingInHandler=e=>{

e.preventDefault()
    
   
  const email=e.target.email.value
  const password=e.target.password.value
  const name=e.target.name.value
  const photoUrl=e.target.name.value
  console.log(email,password,name,photoUrl)



  if (email === '' || name === '' ||password=== '' || photoUrl === '' ) {
    
    Swal.fire(
        'error',
        'Please fill All the Fields',
        'error'
    )
    return;
  }






 
  if(password.length<6){
    return Swal.fire(
        'Warning!',
        'Your Password Must be  Minimum Six characters',
        'warning'
    ) 
    }
    else if(!/[A-Z]/.test(password)){
        return Swal.fire(
            'Warning!',
            'There Must Be a Capital latter',
            'warning'
        )

  
    }
    else if(!/[@$!%*?&]/.test(password)){
        return Swal.fire(
            'Warning!',
            'There Must Be a Special latter',
            'warning'
        )

        


    }
    



  createUser(email,password)
  .then((result)=>{
   console.log(result.user)
   Swal.fire(
    'Sucess!',
    'Succesfully Resistered',
     'success'
   )
 

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
            <Link className='btn bg-slate-500' to='/login'>Login Now</Link>
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