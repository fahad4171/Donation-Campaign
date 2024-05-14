import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";


const Root = () => {
    return (
        <div className="md:container md:mx-auto mx-5">
            <Navbar></Navbar>
            <div className="mt-5">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;