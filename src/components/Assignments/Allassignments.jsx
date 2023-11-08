import { useContext} from 'react';

import PropTypes from 'prop-types';
import { AiFillDelete  } from "react-icons/ai";
import axios from 'axios';
import { AuthContext } from '../Authprovide';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const Allassignments = ({assign,setFilterLevelAssign,filterlevelAssign}) => {

const{thumbailImage,title,mark,email,_id}=assign
const {user}=useContext(AuthContext)




const deleteHandler=(_id)=>{
    console.log(_id)



  
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })

    .then((result) => {
        if (result.isConfirmed){
          

     if(!user){
      Swal.fire(
        'error',
        'You Have To Login First',
        'error'
    )
    return;



     }

    else if(user && user.email!==email){
        Swal.fire(
            'error',
            'You Have No Permission To Delete',
            'error'
        )
        return;
     }
    axios.delete(`https://assignment-server-side-rust.vercel.app/assignment/${_id}`)
    .then(res=>{
    console.log(res.data) 
    if(res.data.deletedCount){
        Swal.fire(
            'Success',
            'Succesfully Deleted',
            'success'
        )

 
        const deleteAssingment=filterlevelAssign.filter(levelAssign=>levelAssign._id!==_id)

                    setFilterLevelAssign(deleteAssingment)



    }

})






    }








        })





}





    return (
        <div className=''>

            
              
              <div className="card  p-4 bg-slate-700" >
              <figure><img className='md:w-[300px] h-[200px] w-full rounded-lg' src={thumbailImage} alt="assignment" /></figure>
              <div className="card-body space-y-4">
                <h2 className="text-sm font-bold text-white">{title}</h2>
                <p className='text-2xl font-bold text-white'>Mark:<span className='bg-green-500 p-2 rounded-lg'>{mark}</span></p>
                <div className="  text-center  space-y-4">
                  <Link to={`/details/${_id}`} className="btn bg-white">View Assignment</Link>
                  <Link to={`/update/${_id}`} className="btn bg-white">Update Assignment</Link>
                </div>
                <div className="text-center">
                  <button onClick={()=>deleteHandler(_id)} className='btn text-3xl text-red-600'><AiFillDelete></AiFillDelete></button>
                </div>
               </div>
            </div>
              


            
            
  </div>       



      
    );
};


Allassignments.propTypes={
assign:PropTypes.object,
filterlevelAssign:PropTypes.any, 
setFilterLevelAssign:PropTypes.any     
        
     }
export default Allassignments;