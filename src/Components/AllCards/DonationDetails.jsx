import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const DonationDetails = () => {

    const [donation, setDonation] = useState();

    const { id } = useParams();

    const donations = useLoaderData();

    useEffect(() => {
        const findDonation = donations.find(donation => donation.id === id)
        setDonation(findDonation)
    }
        , [id, donations])


    const { picture, category, card_color, category_bg_color, button_color, description, price, text_color, title } = donation || {}

    /* -----donate button handle -----*/

    const handleDonate = () => {

        const donationStorage = [];

        const donationItems = JSON.parse(localStorage.getItem('donation'))

 
        if (!donationItems) {
            donationStorage.push(donation)
            localStorage.setItem('donation', JSON.stringify(donationStorage))

            swal("Thanks for Helping!", "Your Donation is Successful", "success");
        }
        else {
            const isExist = donationItems.find(donation => donation.id === id);

                if(!isExist){
                    donationStorage.push(...donationItems, donation)
                    localStorage.setItem('donation', JSON.stringify(donationStorage))
                    swal("Thanks for Helping!", "Your Donation is Successful", "success");
                }
                else{
                    swal("Already Donated!", "Try Donating on Other categories", "error");
                }
    }
}




return (
    <div className="mb-20">
        <div className="relative ">
            <img className="min-w-full md:h-[550px] rounded-b-xl" src={picture} alt="" />
            <div className="bg-black h-28 w-full opacity-70 absolute -mt-28 rounded-b-xl">

                <button onClick={handleDonate} style={{ background: button_color }} className=" px-11 py-2 rounded mt-8 ml-20  text-lg text-white">Donate {price}</button>
            </div>
        </div>
        <div className="mt-12 space-y-9">
            <h1 className="text-4xl font-semibold">{title}</h1>
            <p>{description}</p>
        </div>

    </div>
);
};

export default DonationDetails;