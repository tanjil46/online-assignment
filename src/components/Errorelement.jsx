import { Link } from "react-router-dom";


const Errorelement = () => {
    return (
        <div className="lg:flex h-screen text-center my-6 justify-center items-center space-x-5">
            <p className="text-bold lg:text-4xl text-center text-red-500">OPPS! DATA NOT FOUND [404]</p>
            <Link className="btn  bg-slate-500" to='/'>Home</Link>
        </div>
    );
};

export default Errorelement;