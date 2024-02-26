import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="mx-auto text-center">
           <h2 className="text-4xl font-bold font-poppins " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">Services of Social Events</h2>
           <Marquee pauseOnHover={true} speed={80}>
             <Link className="mr-12"  to="/"><p className="text-2xl" data-aos="zoom-out">We have Care Your Choice. <span className="text-red-800 font-poppins font-bold underline">Welcome  To   KHUSI EVENT MANAGEMENT</span></p></Link>
                 </Marquee>
        </div>
    );
};

export default Header;