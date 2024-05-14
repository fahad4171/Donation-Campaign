import { useState } from "react";
import Donation from './../../Pages/Donation/Donation';
import { Link } from "react-router-dom";
import DonationCards from "../AllCards/DonationCards";


const Search = ({ allDonations }) => {

    const { title, category } = allDonations || {}
    console.log(allDonations)


    //1.create state to store search value
    const [searchItem, setSearchItem] = useState('');

    //2. with this onchange handler we capture the value from input and store it to state
    const handleInput = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm);
    }
    console.log(searchItem)
    return (
        <div>
            <div className="flex items">
                <input onChange={handleInput} type="text" value={searchItem} placeholder="Search here" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-secondary">Search</button>
            </div>
            <div>
                {allDonations.filter((val) => {
                    if (searchItem == "") {
                        return val;
                    } else if (val.category.toLowerCase().includes(searchItem.toLocaleLowerCase())) {
                        return val;
                    }
                }).map((val) => {
                    return (
                        
                    )
                })
                }
            </div>
        </div>
    );
};

export default Search;