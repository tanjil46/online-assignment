import {  useLoaderData, useParams } from "react-router-dom";
import { AiFillFileMarkdown} from "react-icons/ai"
import {BsCalendar2DateFill } from "react-icons/bs"
import { useContext } from "react";
import { AuthContext } from "../Authprovide";
import axios from "axios";
import Swal from "sweetalert2";

const DetailsAssign = () => {

    const{id}=useParams()
    const details=useLoaderData()
const{user}=useContext(AuthContext)



const findAssignDetail=details.find(detail=>detail._id===id)

const{title,thumbailImage,description,mark,date}=findAssignDetail





const submitFormHandler=event=>{
    event.preventDefault()
 const form=event.target;
    const pdfLink=form.pdfLink.value
   const email=form.email.value
  const qNote=form.note.value
const name=form.name.value
console.log(pdfLink,email,qNote)



const submittedValue={
  title,thumbailImage,description,date,pdfLink,email,qNote,name,mark,
  status:'pending'

}

 
axios.post('http://localhost:5000/submitassign',submittedValue)
.then(res=>{

 console.log(res.data)
if(res.data.insertedId){
    Swal.fire(
        'success',
        'Assignment Submitted Succesffuly',
        'success'
    )
    
}

})










}












    return (
 






<div className=" bg-slate-800 p-10">





  <p className="text-center text-white lg:text-2xl font-bold my-4">Cheack Your Assignment</p>


<div className="flex justify-center items-center flex-col lg:flex-row">
 <img src={thumbailImage} className="lg:w-[50%] h-[400px] rounded-lg shadow-2xl" />
 <div>
   <div className=" h-[500px] lg:w-[80%] p-16 space-y-6">

   <h1 className="md:text-2xl text-1xl text-center text-white font-bold">{title}</h1>
   <div className="flex justify-center gap-5">
   <p className="py-6 text-white text-2xl flex items-center ">Mark:<AiFillFileMarkdown></AiFillFileMarkdown>
   <h1>{mark}</h1>
   </p>
   <p className="py-6 text-white flex text-2xl items-center">
     <BsCalendar2DateFill></BsCalendar2DateFill>
     <p>{date}</p>
   </p>
   </div>
   <h2 className="text-lg text-white text-center ">{description}</h2>
  
 
   </div>
 </div>
</div>

<div className="text-center">
 
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Take Assignment</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box bg-slate-500">
    <h3 className="font-bold text-lg">Submit Your Assignment</h3>
<div className="">

<form onSubmit={submitFormHandler} className="space-y-5">




<div className="form-control">
  <label className="label">
    <span className="label-text font-bold text-white">NAME</span>
  </label>
  <label className="input-group">

    <input type="text"  name="name" className="input input-bordered w-full max-w-x " />
  </label>
</div>


<div className="form-control">
  <label className="label">
    <span className="label-text font-bold text-white">PDF LINK</span>
  </label>
  <label className="input-group">

    <input type="text"  name="pdfLink" className="input input-bordered w-full max-w-x " />
  </label>
</div>




<div className="form-control">
  <label className="label">
    <span className="label-text font-bold text-white">Quick Note</span>
  </label>
  <label className="input-group">

  <textarea className="textarea textarea-bordered w-[300px]" name='note'></textarea>
  </label>
</div>




<div className="form-control">
  <label className="label">
    <span className="label-text font-bold text-white">EMAIL</span>
  </label>
  <label className="input-group">

    <input type="text" defaultValue={user && user.email} name="email" className="input input-bordered w-full max-w-x " />
  </label>
</div>



<button type="submit" className="btn">Submit Assignment</button>



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
















    );
};

export default DetailsAssign;