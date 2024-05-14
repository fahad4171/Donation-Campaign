import DonationCards from "./DonationCards";


const AllCards = ({allDonations}) => {
    
    return (
        <div className="my-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    allDonations?.map(donation => <DonationCards key={donation.id} donation={donation}></DonationCards>)
                }
            </div>
        </div>
    );
};

export default AllCards;