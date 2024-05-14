import { useEffect, useState } from "react";

import { Link, useLoaderData } from "react-router-dom";


const Donation = () => {

    const [donated, setDonated] = useState([]);
    const [notFound, setNotFound] = useState();
    
    const [showAll, setShowAll] = useState(false);
    

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation'));

        if (donationItems) {
            setDonated(donationItems)
        }
        else {
            setNotFound('You made No donations, yet!')
        }

    }
        , [])

    
    return (
        <div className="mb-20">
            {
                notFound ? <p className="text-4xl flex justify-center items-center h-[80vh]">{notFound}</p> : 
                <div  className="grid md:grid-cols-2 gap-5">
                    {
                    showAll ? donated.map(donate =>
                        <div key={donate.id}>
                            <div style={{ backgroundColor: donate.card_color }} className="rounded-lg md:flex">
                                <div >
                                    <img src={donate.picture}  alt="image" />
                                </div>
                                <div className="card-body">
                                    <span style={{ backgroundColor: donate.category_bg_color, color: donate.text_color }} className="badge rounded-md font-medium">{donate.category}</span>
                                    <h1 className="font-semibold">{donate.title}</h1>
                                    <p style={{color: donate.text_color}} className="font-semibold">{donate.price}</p>
                                    <Link>
                                        <button className="px-4 py-2 rounded text-white" style={{background: donate.button_color}}> </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )

                : donated.slice(0, 4).map(donate =>
                    <div key={donate.id} className="">
                        <div style={{ backgroundColor: donate.card_color }} className="rounded-lg md:flex">
                            <div>
                                <img src={donate.picture}  alt="image" />
                            </div>
                            <div className="card-body">
                                <span style={{ backgroundColor: donate.category_bg_color, color: donate.text_color }} className="badge rounded-md font-medium">{donate.category}</span>
                                <h1 className="font-semibold">{donate.title}</h1>
                                <p style={{color: donate.text_color}} className="font-semibold">{donate.price}</p>
                                
                                    <button className="px-4 py-2 rounded text-white" style={{background: donate.button_color}}>View Details</button>
                                
                            </div>
                        </div>
                    </div>
                )
                }
                </div>

            }
            <div>
            {
                donated.length > 4 && !showAll && (<button onClick={()=>setShowAll(!showAll)} className="btn btn-success mx-auto my-8 block text-white">See All</button>)
            }
            </div>
        </div>
    );
};

export default Donation;