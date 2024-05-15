import Banner from "../Header/Banner";
import DonationCards from "./DonationCards";
import { useState } from "react";



const AllCards = ({allDonations}) => {
    
    
    const { title, category } = allDonations || {}
    console.log(allDonations)


    //1.create state to store search value
    const [searchItem, setSearchItem] = useState('');

    
    const handleInput = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm);
    }
    console.log(searchItem)
    return (
        <div>
            <Banner data={handleInput}></Banner>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20">
                {allDonations.filter((val) => {
                    if (searchItem == "") {
                        return val;
                    } else if (val.category.toLowerCase().includes(searchItem.toLocaleLowerCase())) {
                        return val;
                    }
                }).map(donation => <DonationCards key={donation.id} donation={donation}></DonationCards>)
                }
            </div>
        </div>
    );
};

export default AllCards;