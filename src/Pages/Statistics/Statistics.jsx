import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart } from "recharts";



const Statistics = () => {

    const [donated, setDonated] = useState([]);
    const [noFound, setNoFound] = useState();
    const allDonations = useLoaderData([]);


    const donatedPercent = Math.round((donated.length / allDonations.length) * 100)
    console.log(donatedPercent)

    const remainPercent = Math.round(100 - donatedPercent);
    console.log(remainPercent)

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation'));
        if (donationItems) {
            setDonated(donationItems);
        }
        else {
            setNoFound("No Statistics found for your donation!!")
        }
    }

        , [])
    const data = [
        { name: 'Remaining Donation', value: remainPercent },
        { name: 'Donated', value: donatedPercent },

    ];

    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className='mt-10 md:mx-[300px]'>
            {
                noFound ? <p className='text-2xl md:text-4xl flex justify-center items-center h-[80vh]'>{noFound}</p> :
                    <div>
                        <div >
                            <PieChart width={400} height={400}>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={200}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>

                            </PieChart>
                        </div>
                        <div className='mt-10 flex gap-10'>
                            <div className='flex items-center gap-3 font-semibold'>Your Donation
                                <div className='w-14 bg-[#00C49F] h-3'></div>
                            </div>
                            <div className='flex items-center gap-3 font-semibold'>Total Donation
                                <div className='w-14 bg-[#FF444A] h-3'></div>
                            </div>


                        </div>
                    </div>
            }


        </div>
    );
};

export default Statistics;