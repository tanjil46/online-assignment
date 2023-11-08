import { useContext } from "react";
import { AuthContext } from "../Authprovide";
import createback from '../img/photo-a.jpg'

import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


const UpdateAssign = () => {
const{user}=useContext(AuthContext)
const navigate=useNavigate()
const defautlAssignment=useLoaderData()
const{thumbailImage,title,mark,email,assignmentLevel,_id,description,date}=defautlAssignment

console.log(defautlAssignment)
  
    const backStyle={
    
        backgroundImage:`url(${createback})`
    }



 const formHandler=event=>{


    event.preventDefault()
    const form=event.target

    const title =form.title.value;
    const mark=form.mark.value;
   const thumbailImage=form.thumb.value;
  const description=form.desc.value
  const assignmentLevel=form.level.value

const date=form.date.value;


  const updateAssignment={title,thumbailImage,description,mark,assignmentLevel,date}



  if(user && user.email!==email){
    Swal.fire(
        'error',
        'Invalid User',
        'error'
    )
    return;
  }







 axios.put(`https://assignment-server-side-rust.vercel.app/update/${_id}`,updateAssignment)
 .then(res=>{

console.log(res.data)

 if(res.data.modifiedCount>0){
    Swal.fire(
        'success',
        'Successfully Updated Assignment',
        'success'
    )

 }
 
    navigate('/assin')





 })












 }




    return (
        <div className=' bg-cover bg-center  p-16' style={backStyle}>
            
            <div className="flex md:flex-row flex-col items-center gap-6 ">
<div className="w-[50%]">

<p className="text-3xl font-bold text-white">Update Your Assignment For Batter Look</p>
<h1 className='text-white text-justify pt-4 w-[]'>Studying online has become an increasingly popular choice for learners of all ages and backgrounds. The convenience and flexibility of online education allow individuals to pursue their educational goals from the comfort of their own homes or any location with an internet connection. This approach to learning opens up a world of opportunities, enabling students to access a wide range of courses and degree programs, often from prestigious institutions, that might not have been accessible otherwise. </h1>

</div>
  <div className="">
        {/* FORM STAR TS HERE */}


 <div className="">


 <form onSubmit={formHandler} className='space-y-4'>


 <div className="form-control">
  <label className="label">
    <span className="label-text font-bold text-white">TITLE</span>
  </label>
  <label className="input-group">

    <input type="text"  name="title" defaultValue={title} className="input input-bordered w-full max-w-x " />
  </label>
</div>





<div className="form-control">
  <label className="label">
    <span className="label-text font-bold text-white">MARKS</span>
  </label>
  <label className="input-group">

    <input type="text"  name="mark" defaultValue={mark} className="input input-bordered w-full max-w-x " />
  </label>
</div>





<div className="form-control">
  <label className="label">
    <span className="label-text font-bold text-white">THUMBAIL IMAGE</span>
  </label>
  <label className="input-group">

    <input type="text"  name="thumb" defaultValue={thumbailImage} className="input input-bordered w-full max-w-x " />
  </label>
</div>





<div className="form-control">
  <label className="label">
    <span className="label-text font-bold text-white">ASSIGNMENT LEVEL</span>
  </label>
  <label className="input-group">

   <select defaultValue={assignmentLevel} name='level'>
    <option value='easy'>Easy</option>
    <option value='medium'>Medium</option>
    <option value='hard'>Hard</option>
   </select>
  </label>
</div>



<div className="form-control">
  <label className="label">
    <span className="label-text font-bold text-white">EMAIL</span>
  </label>
  <label className="input-group">

    <input type="email"  name='email' value={user&& user.email} defaultValue={user && user.email} className="input input-bordered w-full max-w-x " />
  </label>
</div>













<div className="form-control  ">
  <label className="label">
    <span className="label-text font-bold text-white">DUE DATE</span>
  </label>

  <input type="date" defaultValue={date}  name="date" className="input input-bordered w-full max-w-x " />


{/*   
<DateTime >

</DateTime> */}

</div>


<div className="form-control">
  <label className="label">
    <span className="label-text font-bold text-white">DESCRIPTION</span>
  </label>
  <label className="input-group">

  <textarea className="textarea textarea-bordered w-[300px]" defaultValue={description} name='desc'></textarea>
  </label>
</div>

<div className="">
 
 <button type='submit' className="btn bg-slate-600 text-white hover:text-black">Update Assingment</button>

</div>

</form>


















 </div>








  </div>
</div>









        </div>
    );












};

export default UpdateAssign;