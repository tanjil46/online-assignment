import axios from "axios";
import { useEffect } from "react";


const Assignments = () => {

 useEffect(()=>{

 axios.get('http://localhost:5000/assignment')
 .then(res=>{
    console.log(res.data)
 })







 },[])





    return (
        <div>
            
        </div>
    );
};

export default Assignments;