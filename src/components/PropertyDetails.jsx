import PropTypes from "prop-types";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const PropertyDetails = () => {
  const properties = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  if (!Array.isArray(properties)) {
    return <div>Properties data is not available.</div>;
  }

  // Find the property with the matching id
  const property = properties.find((property) => property.id === id);

  if (!property) {
    return <div>No property found.</div>;
  }
  

  const {
    image,
    estate_title,
    description,
    location,
    status,
    price,
    area,
    facilities,
  } = property;

  
  return (
    <>
      <Navbar></Navbar>
      <div data-aos="fade-up" className="bg-white shadow-md rounded-lg p-6 m-4 flex flex-col justify-between h-full">
        <div>
          <img
            src={image}
            alt={estate_title}
            className="w-full h-full object-cover mb-4 rounded-lg"
          />
          <h3 className="text-lg font-semibold mb-2">{estate_title}</h3>
          <p className="text-gray-600 mb-2">{description}</p>
          <div className="flex justify-between mb-2">
            <p className="text-black font-medium">{location}</p>
            <p className="text-green-500 font-bold">{status}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700 font-bold">{price}</p>
            <p className="text-black font-medium">{area}</p>
          </div>
          <div className="flex flex-wrap mt-4">
            {facilities.map((facility, index) => (
              <span
                key={index}
                className="facility mb-2 mr-2 px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
              >
                {facility}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

PropertyDetails.propTypes = {
  property: PropTypes.shape({
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    estate_title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default PropertyDetails;
