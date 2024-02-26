

const Banner = () => {
    return (
        <div className="mt-6">
            <div className="hero min-h-screen" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000" style={{ backgroundImage: 'url(https://i.ibb.co/FngHbzL/pexels-fu-zhichao-587741.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-gray-800"><span className="text-red-800">KHUSI </span><br></br>Event Management</h1>
                        <p className="mb-5 text-black">Event management is the process of creating and maintaining an event. This process spans from the very beginning of planning all the way to post-event strategizing. At the start, an event manager makes planning decisions, such as the time, location, and theme of their event</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;