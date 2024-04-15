import { useLoaderData } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import PropertiesNewsCard from "./PropertiesNewsCard";


const Properties = () => {
    const propertiesNews = useLoaderData(); 

    return (
        <div className="container mx-auto">
            <Navbar />
            <div className="p-5  rounded-2xl shadow my-2 ">
                <h2 className="text-3xl text-gray-500 text-center font-semibold mb-4">
                    Latest Properties
                </h2>
            </div>
            <div className="grid grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {propertiesNews.map((property) => (
                    <PropertiesNewsCard key={property.id} property={property} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Properties;
