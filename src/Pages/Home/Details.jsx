import {  useLoaderData, useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";

const Details = () => {
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
            <Navbar></Navbar>
            <div className="card w-full bg-base-100 shadow-xl mt-6">
                <figure className="px-10 pt-10">
                    <img src={userDetails.image} alt="Shoes" className="rounded-xl w-full h-96" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{userDetails.name}</h2>
                    <p>{userDetails.short_description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="mt-6">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Details;