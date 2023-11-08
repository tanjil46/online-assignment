import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovide";
import Mysubmitted from "./Mysubmitted";


const MyAssignment = () => {
const[submits,setSumbit]=useState([])

const{user}=useContext(AuthContext)
const email=(user.email)
console.timeLog(email)
    useEffect(()=>{



        axios.get('https://assignment-server-side-d4wrs85qt-tanjils-projects.vercel.app/submitted',{withCredentials:true})
        .then(res=>{
            setSumbit(res.data)
            console.log(res.data)

        })
       
       
       
        },[])
 


      const matchUser=submits.filter(submit=>submit.email==email)
    
      console.log(matchUser)








    return (
        <div>

            <p className="text-center text-2xl font-bold mt-6">My Submitted <span className="text-3xl font-bold text-red-500">Assignments</span></p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-12">


                 {
                   matchUser.map((match,idx)=><Mysubmitted key={idx} match={match}></Mysubmitted>)
                   

                 }



            </div>
        </div>
    );
};

export default MyAssignment;