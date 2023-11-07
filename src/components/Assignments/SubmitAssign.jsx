import axios from "axios";
import { useEffect, useState } from "react";
import SubmitShow from "./SubmitShow";




const SubmitAssign = () => {
const[submitA,setSubmitA]=useState([])
 useEffect(()=>{


 axios.get('http://localhost:5000/submitassign')
 .then(res=>{
    setSubmitA(res.data)
    console.log(res.data)
 })


 },[])


return (
    <div className="">
<p className='text-2xl fond-bold text-center my-4'>Please Mark The Assignments</p>

   
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {
                submitA.map(submitAss=><SubmitShow submitAss={submitAss} key={submitAss._id}></SubmitShow>)
            }
        </div>
        </div>
    );
};

export default SubmitAssign;