
import axios from 'axios';
import createback from '../img/12.jpg'
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../Authprovide';
import { useNavigate } from 'react-router-dom';


const CreateAssingment = () => {
const naviagte=useNavigate()
const {user}=useContext(AuthContext)
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
 const email=form.email.value;
const date=form.date.value;

console.log(title,mark,thumbailImage,description,assignmentLevel,email,date)

if (title === '' || description === '' || mark === '' || thumbailImage === '' || assignmentLevel === '' || email=== '' || date === '' ) {
    
    Swal.fire(
        'error',
        'Please fill All the Fields',
        'error'
    )
    return;
  }













const assignmentInfo={title,mark,thumbailImage,description,assignmentLevel,email,date}

 axios.post('https://assignment-server-side-rust.vercel.app/assignment',assignmentInfo)
 .then(res=> {
    console.log(res.data)
 if(res.data.insertedId){
        Swal.fire(
            'SUCCESS!',
            'Assingment Succesfully Created',
            'success'
          )

    }
    else{
        Swal.fire(
            'Error',
            'Somithing Is Wrong',
            'error'
        )
    }
    naviagte('/assin')
    
 })







 }













    return (
        <div className=' bg-cover bg-center  p-16' style={backStyle}>
            
            <div className="flex flex-col md:flex-row gap-8 items-center ">
<div className="w-[50%]">

<p className="md:text-3xl text-lg font-bold text-white">Lets Make A Unique Assignment</p>
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

    <input type="text"  name="title" className="input input-bordered md:w-full w-[80%] max-w-x " />
  </label>
</div>





<div className="form-control">
  <label className="label">
    <span className="label-text font-bold text-white">MARKS</span>
  </label>
  <label className="input-group">

    <input type="text"  name="mark" className="input input-bordered md:w-full w-[80%] max-w-x " />
  </label>
</div>





<div className="form-control">
  <label className="label">
    <span className="label-text font-bold text-white">THUMBAIL IMAGE</span>
  </label>
  <label className="input-group">

    <input type="text"  name="thumb" className="input input-bordered md:w-full w-[80%] max-w-x " />
  </label>
</div>





<div className="form-control">
  <label className="label">
    <span className="label-text font-bold text-white">ASSIGNMENT LEVEL</span>
  </label>
  <label className="input-group">

   <select name='level'>
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

    <input type="email"  name='email' value={user&& user.email} defaultValue={user && user.email} className="input input-bordered md:w-full w-[80%] max-w-x" />
  </label>
</div>













<div className="form-control  ">
  <label className="label">
    <span className="label-text font-bold text-white">DUE DATE</span>
  </label>

  <input type="date"  name="date" className="input input-bordered md:w-full w-[80%] max-w-x " />


{/*   
<DateTime >

</DateTime> */}

</div>


<div className="form-control">
  <label className="label">
    <span className="label-text font-bold text-white">DESCRIPTION</span>
  </label>
  <label className="input-group">

  <textarea className="textarea textarea-bordered md:w-[300px] w-[280px] " name='desc'></textarea>
  </label>
</div>

<div className="">
 
 <button type='submit' className="btn bg-slate-700 text-white hover:text-black">Create Assingment</button>

</div>

</form>


















 </div>








  </div>
</div>









        </div>
    );
};

export default CreateAssingment;