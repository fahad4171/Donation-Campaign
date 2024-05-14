import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <div className="mt-5">
            <div className="navbar">
                <div className="flex-1">
                    <Logo></Logo>
                </div>
                <div className="flex-none">
                    <ul className="menu-horizontal px-1 gap-5 font-medium">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "" : isActive ? "text-pink-600 font-medium underline" : ""
                                }>Home</NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-pink-600 font-medium underline" : ""
                                }>Donation</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/statistics"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-pink-600 font-medium underline" : ""
                                }>Statistics</NavLink>
                        </li>

                    </ul>

                    {/* hamburger menu*/}
                    <div className="lg: hidden">
                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"><ul className="menu-horizontal px-1 gap-5 font-medium">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "" : isActive ? "text-pink-600 font-medium underline" : ""
                                }>Home</NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-pink-600 font-medium underline" : ""
                                }>Donation</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/statistics"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-pink-600 font-medium underline" : ""
                                }>Statistics</NavLink>
                        </li>

                    </ul></path></svg>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;