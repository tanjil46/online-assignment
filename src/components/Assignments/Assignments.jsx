

import { useEffect, useState } from "react";
import Allassignments from "./Allassignments";

import axios from "axios";


const Assignments = () => {
const[assignments,setAssignments]=useState([])
const[filterlevelAssign,setFilterLevelAssign]=useState([])
// const assignments=useLoaderData()
 const[selectLevel,setSelectLevel]=useState('easy')
 const[count,setCount]=useState()
 const[pagesNo,setPagesNo]=useState(10)
const[currentPage,setCurrentPage]=useState(0)


   
 useEffect(()=>{
    axios.get('http://localhost:5000/assignmentcount')
    .then(res=>setCount(res.data.count))
    
    },[])
    


    const totalPages=Math.ceil(count/pagesNo)


    const pages=[]
    for(let i=0;i<totalPages;i++){
        pages.push(i)
       
    } 





useEffect(()=>{

    axios.get(`http://localhost:5000/assignment?page=${currentPage}&size=${pagesNo}`)
    .then(res=>setAssignments(res.data))


},[currentPage,pagesNo])





 useEffect(()=>{

const filterLevel=assignments.filter(assign=>assign.assignmentLevel===selectLevel)

setFilterLevelAssign(filterLevel)

},[assignments,selectLevel])






const levelHanler=(event)=>{
    setSelectLevel(event.target.value);
}




 const pagehandler=(e)=>{
const pageValue=parseInt(e.target.value)
 setPagesNo(pageValue)
setCurrentPage(0)


 }


const prevhanler=()=>{
if(currentPage>0){
    setCurrentPage(currentPage-1)
}
}

const nexthandler=()=>{

if(currentPage<pages.length-1){
    setCurrentPage(currentPage+1)
}

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

            filterlevelAssign.map((assign,idx)=><Allassignments setFilterLevelAssign={setFilterLevelAssign} filterlevelAssign={filterlevelAssign} assign={assign} key={idx}></Allassignments>)
        }




          </div>


      <div className="text-center space-x-4">
        <p>{currentPage}</p>
        <button onClick={prevhanler}>Prev</button>
        {
            pages.map(page=><button onClick={()=>setCurrentPage(page)} 
            className= {`"btn bg-slate-500" ${currentPage===page ?'text-white btn bg-slate-800':undefined} `}key={page}>{page}</button>)
        }
       <button onClick={nexthandler}>Next</button>

       
<select value={pagesNo} onChange={pagehandler} name='' id=''>
            <option value='5'>2</option>
           <option value='10'>5</option>
           <option value='20'>10</option>
           <option value='50'>12</option>
            </select>




      </div>




        </div>
    );
};

export default Assignments;