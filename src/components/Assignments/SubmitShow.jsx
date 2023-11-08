import axios from 'axios';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { AuthContext } from '../Authprovide';
import { useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';







const SubmitShow = ({submitAss}) => {
const navigate=useNavigate()
const{name,title,pdfLink,qNote,mark,thumbailImage,status,_id}=submitAss;







const{user}=useContext(AuthContext)

const email=(user&& user.email)

const givemarkHandler=event=>{

    event.preventDefault();
   
    const form=event.target;
 const examMark=form.giveMark.value;
 const feedBack=form.back.value
 console.log(email,_id)


const statusSecond='Completed'

const submittedMarkStatus={
    statusSecond,examMark,email,feedBack,mark,title
}









const statusUpdate={statusSecond,email}


axios.post('http://localhost:5000/submitted',submittedMarkStatus)
.then(res=>{
    console.log(res.data)
    if(res.data.insertedId){
      Swal.fire(
        'SUCCESS',
        'Mark Submitted Succesfully',
        'success'
      )
    }

})



axios.patch('http://localhost:5000/submitassign',statusUpdate)
.then(res=>{
    console.log(res.data)
    

})

navigate('/myassin')


}


 const linkHabler=()=>{
  
const usePdfUrl=pdfLink

window.open(usePdfUrl,'_blank')
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
    <p className='text-center text-white text-lg'>Assignment Marks:{mark}</p>
    <p className='text-center text-white text-lg'>Status:{status}</p>
  </div>
   </div>

    <div className="text-center">
     
  {/* <Link className='btn' to={`/updatesub/${_id}`}>Give Marks</Link> */}


{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Give Mark</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box bg-slate-700">
    

<div className="">
<a onClick={linkHabler} className='text-blue-400 border-b-2'  href=''>Link Of Google Pdf</a>
</div>

<div className="">



<form onSubmit={givemarkHandler} className='space-y-6'>


<div className="form-control">
<label className="label">
<span className="label-text font-bold text-white">Examinee Mark</span>
</label>
<label className="input-group">

<input type="number"  name="giveMark" className="input input-bordered w-full max-w-x " />
</label>
</div>



<div className="form-control">
<label className="label">
<span className="label-text font-bold text-white">Examinee Feedback</span>
</label>
<label className="input-group">

<textarea className="textarea textarea-bordered w-[300px]" name='back'></textarea>
</label>
</div>



<button className='btn ' type='submit'>Submit Mark</button>




</form>









</div>








    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>










    </div>
  </div>







</div>








            
       
    );
};


SubmitShow.propTypes={
  submitAss:PropTypes.object,
        
        
     }
      
export default SubmitShow;