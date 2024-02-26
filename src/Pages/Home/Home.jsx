import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import SecondSection from "../SecondSection/SecondSection";
import ThirdSection from "../ThirdSection/ThirdSection";
import ServiceCard from "./ServiceCard";
import SimpleMap from "./GoogleMap.jsx/GoogleMap";
import Offer from "../Offer/Offer";


const Home = () => {
    const services = useLoaderData()
    console.log(services)
    return (
        <div className="bg-gray-100">
            <Header></Header>
            <Navbar></Navbar>
            <Banner></Banner>
            <h1 className="text-center font-poppins font-bold text-3xl text-red-600 mt-6">All Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 space-y-3">
                   {
                    services.map(service => <ServiceCard key={service.id} services={service}></ServiceCard>)
                   }
                </div>
                
                <div className="">
                   <ThirdSection></ThirdSection>
                </div>
            </div>
            <div className="mt-6" >
                   <SecondSection></SecondSection>
                </div>
                <div>
                    <Offer></Offer>
                </div>
               
                <div className="mt-6">
            <SimpleMap></SimpleMap>
            </div>
            <div className="mt-6">
            <Footer></Footer>
            </div>
             
        </div>
    );
};

export default Home;