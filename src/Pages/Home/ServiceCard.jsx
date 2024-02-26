/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const ServiceCard = ({ services }) => {
    const { id, name, image, price, short_description } = services;

    return (
        <div className="">
            <div className="card w-72 h-104 bg-base-100 shadow-xl" data-aos="zoom-out">
                <figure><img className="w-56" src={image} alt="wedding" /></figure>
                <div className="card-body">
                    <h2 className="card-title justify-center text-center">{name}</h2>
                    <h2 className="card-title text-center justify-center">{price}</h2>
                    <p className="text-center justify-center" >
                    
                    {
                    short_description.length > 50 ? <p>{short_description.slice(0,50)}<Link to={`/service/${id}`}> <hr></hr> <button className="btn btn-primary">View Details</button> </Link></p> : <p>{short_description}</p>
                    }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;