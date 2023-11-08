

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
const[spinner,setSpinner]=useState(true)

   


useEffect(()=>{
    setTimeout(()=>{
   setSpinner(false)
  
  
  
    },1000)
    
  },[])

 useEffect(()=>{
    axios.get('https://assignment-server-side-d4wrs85qt-tanjils-projects.vercel.app/assignmentcount')
    .then(res=>setCount(res.data.count))
    
    },[])
    


    const totalPages=Math.ceil(count/pagesNo)


    const pages=[]
    for(let i=0;i<totalPages;i++){
        pages.push(i)
       
    } 





useEffect(()=>{

    axios.get(`https://assignment-server-side-d4wrs85qt-tanjils-projects.vercel.app/assignment?page=${currentPage}&size=${pagesNo}`)
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
            
            <p className="text-2xl font-bold text-center pt-6">Online Group  <span className="text-3xl text-purple-600 ">Assignment</span></p>

               <div className="">
         
   <p className="text-center md:text-end mt-4 font-bold">Filter By<select className="border-2 border-blue-600" name="level" onChange={levelHanler}  value={selectLevel}>
    <option className="text-white bg-black font-bold"   value='easy'>Easy</option>
    <option className="text-white bg-black font-bold"  value='medium'>Medium</option>
    <option className="text-white bg-black font-bold" value='hard'>Hard</option>
   </select></p> 



               </div>


               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10 ">
         

        {
             spinner ?<div className="h-screen mx-auto  items-center justify-center loading-lg flex">
                <span className="loading loading-spinner  text-2xl text-green-600"></span>
             </div>:
              

            filterlevelAssign.map((assign,idx)=><Allassignments setFilterLevelAssign={setFilterLevelAssign} filterlevelAssign={filterlevelAssign} assign={assign} key={idx}></Allassignments>)
       
        }
</div>



        


      <div className="text-center space-x-8">
       
        <button className="btn bg-slate-400" onClick={prevhanler}>Prev</button>
        {
            pages.map(page=><button onClick={()=>setCurrentPage(page)} 
            className= {`"btn bg-slate-500" ${currentPage===page ?'text-white btn bg-slate-800':undefined} `}key={page}>{page}</button>)
        }
       <button className="btn bg-slate-400" onClick={nexthandler}>Next</button>

       
<select value={pagesNo} onChange={pagehandler} name='' id=''>
            <option  value='5'>5</option>
           <option value='10'>10</option>
           <option value='12'>12</option>
           <option value='20'>20</option>
            </select>




      </div>




        </div>
    );
};

export default Assignments;