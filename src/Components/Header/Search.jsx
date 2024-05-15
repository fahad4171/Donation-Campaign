import { useState } from "react";
import Donation from './../../Pages/Donation/Donation';
import { Link } from "react-router-dom";
import DonationCards from "../AllCards/DonationCards";


const Search = ({ allDonations }) => {

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
            <div className="">
                <input onChange={handleInput} type="text" value={searchItem} placeholder="Search here" className="input input-bordered w-full max-w-xs text-black" />
                <button className="btn btn-secondary">Search</button>
            </div>
            <div>
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

export default Search;