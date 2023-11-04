import { Outlet } from "react-router-dom";
import Header from "./HomePages.jsx/Header";


const Roots = () => {
    return (
        <div className="">
             
             <Header></Header>
             <Outlet></Outlet>






        </div>
    );
};

export default Roots;