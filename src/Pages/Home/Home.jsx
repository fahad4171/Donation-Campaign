import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner";
import AllCards from "../../Components/AllCards/AllCards";


const Home = () => {

    const allDonations = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <AllCards allDonations={allDonations}></AllCards>
        </div>
    );
};

export default Home;