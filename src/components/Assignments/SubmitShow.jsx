import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';




const SubmitShow = ({submitAss}) => {

const{name,title,pdfLink,qNote,thumbailImage,status,_id}=submitAss





const givemarkHandler=event=>{

    event.preventDefault();
   
    const form=event.target;
 const examMark=form.giveMark.value;
 
 const feedBack=form.back.value

console.log(feedBack)
const statusSecond='Completed'
const markStatus={
    statusSecond,examMark,feedBack
}




axios.put('http://localhost:5000/submitassign',markStatus)
.then(res=>{
    console.log(res.data)
    // if(res.data.modifiedCount>0){
    //   Swal.fire(
    //     'SUCCESS',
    //     'Mark Submitted Succesfully',
    //     'success'
    //   )
    // }

})







}



    return (
        <div>
          
<div className="card  bg-slate-700 shadow-xl p-6">
  <figure className="px-10 pt-10">
    <img src={thumbailImage}alt="assignment" className="rounded-xl w-[100px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-white">{title}</h2>
    <p className='text-white font-bold'>Name: {name}</p>
  <div className="">
    <p className='text-center text-white text-lg'>Assignment Marks:{}</p>
    <p className='text-center text-white text-lg'>Status:{status}</p>
  </div>
   </div>

    <div className="text-center">
     
  <Link className='btn' to={`/updatesub/${_id}`}>Give Marks</Link>


    </div>
  </div>







</div>








            
       
    );
};


SubmitShow.propTypes={
  submitAss:PropTypes.object,
        
        
     }
      
export default SubmitShow;