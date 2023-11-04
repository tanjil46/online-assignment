
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
const FeatureCard = ({feature}) => {

 const{img,assignment}=feature;
const[spinner,setSpinner]=useState(true)



useEffect(()=>{
  setTimeout(()=>{
 setSpinner(false)



  },1000)
  

  



},[])

    return (
        <div className='my-4 p-6' >

{
  spinner?<span className="loading loading-spinner loading-lg"></span>:
   <div className="card ">
  <figure><img className='w-[300px] h-[200px] rounded-lg' src={img}alt="assigment" /></figure>
  <div className="">
    <h2 className=" text-center text-white font-bold">{assignment}</h2>
    
  </div>
</div>
}




        </div>
    );
};



FeatureCard.propTypes={
    feature:PropTypes.object,
        
        
     }
      




export default FeatureCard;