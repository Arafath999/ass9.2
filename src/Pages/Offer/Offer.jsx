import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Offer = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('offer.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div className="border mt-6 mb-6 text-center h-[20vh] bg-slate-200" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000" >
            <h2 className="text-2xl font-poppins font-bold pt-4">CHECK OUR <span className="font-bold text-2xl text-green-500">OFFER</span></h2>
           <div className="text-center gap-6 pt-6">
           {categories.map(category => (
                <Link className="ml-4 text-2xl font-poppins font-bold text-red-500 " key={category.id} to={`/offer/${category.id}`}>{category.name}
                </Link>
            ))}
           </div>
        </div>
    );
};

export default Offer;
