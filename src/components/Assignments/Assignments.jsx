

import { useEffect, useState } from "react";
import Allassignments from "./Allassignments";

import axios from "axios";


const Assignments = () => {
const[assignments,setAssignments]=useState([])
const[filterlevelAssign,setFilterLevelAssign]=useState([])
// const assignments=useLoaderData()
 const[selectLevel,setSelectLevel]=useState('easy')
 

useEffect(()=>{

    axios.get('http://localhost:5000/assignment')
    .then(res=>setAssignments(res.data))


},[])





 useEffect(()=>{

const filterLevel=assignments.filter(assign=>assign.assignmentLevel===selectLevel)

setFilterLevelAssign(filterLevel)

},[assignments,selectLevel])






const levelHanler=(event)=>{
    setSelectLevel(event.target.value);
}



    return (
        <div>
            
            <p className="text-2xl font-bold text-center pt-6">Online Group Study <span className="text-3xl text-purple-600 ">Assignment</span></p>

               <div className="">
         
   <select name="level" onChange={levelHanler}  value={selectLevel}>
    <option   value='easy'>Easy</option>
    <option  value='medium'>Medium</option>
    <option value='hard'>Hard</option>
   </select>



               </div>



          <div className="grid grid-cols-1 md:grid-cols-3  ">

        {

            filterlevelAssign.map((assign,idx)=><Allassignments assign={assign} key={idx}></Allassignments>)
        }




          </div>







        </div>
    );
};

export default Assignments;