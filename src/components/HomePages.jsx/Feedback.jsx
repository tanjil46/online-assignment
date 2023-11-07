import { useEffect, useState } from "react";
import FeedbackSecond from "./FeedbackSecond";


const Feedback = () => {
const[feeds,setfeed]=useState([])

useEffect(()=>{

 fetch('feed.json')
 .then(res=>res.json())
 .then(data=>setfeed(data))



},[])







    return (
        <div>
            <p className="text-center my-8 text-xl font-bold">Feedback from Student Community</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-12">
            {
  feeds.map((feed,idx)=><FeedbackSecond feed={feed}  key={idx}></FeedbackSecond>)



            }
            </div>


        </div>
    );
};

export default Feedback;