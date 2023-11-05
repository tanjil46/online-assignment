import PropTypes from 'prop-types';
import LOGO from '../img/assing-logo.jpg'
import { Link } from 'react-router-dom';

import { useContext} from 'react';
import { AuthContext } from '../Authprovide';
import Swal from 'sweetalert2';
const Header = ({children}) => {

const{userLogOut,user}=useContext(AuthContext)


const logOutHandler=()=>{
  userLogOut()
  .then(()=>{
    
      Swal.fire(
          'Sucess!',
          'Succesfully LogOut',
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
        <div>
            <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar  bg-slate-400">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
     <div className="lg:flex-1 mx-auto ">
      
        <img className='w-[140px] rounded-full' src={LOGO}></img>
    

    
        
     </div>
     
     
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal space-x-4 font-bold items-center ">
          {/* Navbar menu content here */}
          <Link to='/'>Home</Link>
         <Link to='/assin'>Assignments</Link>
         <Link to='/createassin'>Create Assignments</Link>
         <Link to='/myassin'>My Assignments</Link>
         <Link to='/subassin'>Submitted Assignments</Link>
           {
             user?<Link onClick={logOutHandler} className='border-2 py-2 px-4 border-white hover:bg-slate-500' to='/login'>LOG OUT</Link>:
             <Link className='border-2 py-2 px-4 border-white hover:bg-slate-500' to='/login'>LOG IN</Link>
           }
       


         <div className="">

{
    user&&<img className={`w-[55px]  rounded-full hover:${user.displayName}`} src={user.photoURL}></img>
    

    
}

         </div>


        </ul>
      </div>





    </div>
    {children}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 






    <ul className="menu p-4 w-80 min-h-full text-center  space-y-8 text-white font-bold bg-black">


    {
             user?<Link onClick={logOutHandler} className='border-2 py-2 px-4 border-white hover:bg-slate-500' to='/login'>LOG OUT</Link>:
             <Link className='border-2 py-2 px-4 border-white hover:bg-slate-500' to='/login'>LOG IN</Link>
           }
       
        
{
    user&&<img className={`w-[55px] mx-auto  rounded-full hover:${user.displayName}`} src={user.photoURL}></img>
    

    
}
    <Link to='assin'>Assignments</Link>
         <Link to='createassin'>Create Assignments</Link>
         <Link to='myassin'>My Assignments</Link>
         <Link to='subassin'>Submitted Assignments</Link>
         </ul>

  </div>
</div>
        </div>
    );
};




Header.propTypes={
children:PropTypes.node,
    
    
 }
  





export default Header;
