
import { useEffect, useState } from "react";
import FeatureCard from "../FeatureCard";


const Feature = () => {

    const[spinner,setSpinner]=useState(true)
const[cardAssign,setcardAssign]=useState([])


useEffect(()=>{
    setTimeout(()=>{
   setSpinner(false)
  
  
  
    },1000)
    
},[])










useEffect(()=>{
   fetch('assign.json')
   .then(res=>res.json())
   .then(data=>setcardAssign(data))

},[])





    return (
        <div className="">
             <p className="text-center my-5 font-bold text-xl">Our featured <span className="text-pink-400 text-2xl">Assignments</span></p>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-12 bg-slate-500 "  >
             {
                spinner?<span className="loading loading-spinner loading-lg h-screen  text-center "></span>:
                cardAssign.map((feature,idx)=><FeatureCard feature={feature} key={idx}></FeatureCard>)
             }
        </div>

        </div>
    );
};

export default Feature;