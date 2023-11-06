import { useContext, useEffect, useState } from 'react';
import cardBg from '../img/card bg.jpg'
import PropTypes from 'prop-types';
import { AiFillDelete  } from "react-icons/ai";
import axios from 'axios';
import { AuthContext } from '../Authprovide';
import Swal from 'sweetalert2';
const Allassignments = ({assign,setFilterLevelAssign,filterlevelAssign}) => {

const{thumbailImage,title,mark,email,_id}=assign
const {user}=useContext(AuthContext)


const cardBgStyle={
    
    backgroundImage:`url(${cardBg})`
}

const[spinner,setSpinner]=useState(true)

useEffect(()=>{
  setTimeout(()=>{
 setSpinner(false)



  },1000)
  
},[])


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
    axios.delete(`http://localhost:5000/assignment/${_id}`)
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

            {
              spinner ?<span className="loading loading-spinner loading-lg"></span>:
              <div className="card  p-12" style={cardBgStyle}>
              <figure><img className='w-[300px] h-[200px] rounded-lg' src={thumbailImage} alt="assignment" /></figure>
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Mark:{mark}</p>
                <div className="flex justify-between gap-4 items-center ">
                  <button className="btn btn-primary">Viwe Assignment</button>
                  <button className="btn btn-primary">Update Assignment</button>
                </div>
                <div className="text-center">
                  <button onClick={()=>deleteHandler(_id)} className='btn text-3xl text-red-600'><AiFillDelete></AiFillDelete></button>
                </div>
               </div>
            </div>
              


            }
            
  </div>       



      
    );
};


Allassignments.propTypes={
assign:PropTypes.object,
filterlevelAssign:PropTypes.any, 
setFilterLevelAssign:PropTypes.any     
        
     }
export default Allassignments;