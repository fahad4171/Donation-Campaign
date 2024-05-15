import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner";
import AllCards from "../../Components/AllCards/AllCards";


const Home = (handleInput) => {

    const allDonations = useLoaderData();
    
    
    return (
        <div>
            <AllCards allDonations={allDonations} handleInput={handleInput}></AllCards>
        </div>
    );
};

export default Home;