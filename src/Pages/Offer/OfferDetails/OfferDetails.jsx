import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../../Shared/Header/Header";


const OfferDetails = () => {
    const data = useLoaderData();
    const [userDetails, setUserDetails] = useState({});
    const {id} = useParams();
    

    useEffect(()=>{
        const details= data.find(card=> card.id== id)
        setUserDetails(details)

    },[id,data])
    return (
        <div>
            <Header></Header>
            <div className="card w-full bg-base-100 shadow-xl mt-6">
                <figure className="px-10 pt-10">
                    <img src={userDetails.image} alt="Shoes" className="rounded-xl w-full h-96" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{userDetails.name}</h2>
                    <p className="font-bold text-2xl">{userDetails.price}</p>
                    <p className="font-extrabold text-4xl text-pink-600">{userDetails.offer}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default OfferDetails;