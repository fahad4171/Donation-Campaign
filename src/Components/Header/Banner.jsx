
const Banner = () => {
    return (
        <div>
            <div className="relative">
            <div className="hero min-h-[500px]" style={{ backgroundImage: 'url(image/Banner.png)' }}>
                <div className="hero-overlay bg-opacity-80 bg-slate-100"></div>
                {/* <div className="w-full absolute -mt-[430px]">
                    <Navbar></Navbar>
                </div> */}
                <div className="hero-content text-center text-neutral-content items">
                    <div className="flex flex-col items-center">
                        <h1 className="mb-10 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
                        <div className="flex items">
                            <input type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs" />
                            <button className="btn btn-secondary">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;