import { useLoaderData } from "react-router-dom";
import PropertyCard from "../../components/PropertyCard";
import Navbar from "../shared/Navbar";
import Banner from "../../components/Banner";
import Footer from "../shared/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import 'animate.css';


const Home = () => {
    const properties = useLoaderData(); 

    useEffect(() => {
        AOS.init({
          duration: 2000,
          easing: 'ease-in-out',
          once: true
        });
      }, []);

    return (
        <div data-aos="fade-up" className="container mx-auto ">
            <Navbar />
            <Banner />
            <div className="p-5  rounded-2xl shadow my-2 ">
                <h2 className="text-3xl  text-gray-500 animate__animated animate__bounce animate__repeat-3  text-center font-semibold mb-4">
                    Featured Properties
                </h2>
            </div>
            <div className="grid grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

// No need to define propTypes for properties in this component

export default Home;
