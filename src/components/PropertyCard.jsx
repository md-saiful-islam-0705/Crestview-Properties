import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
    // Check if property is undefined
    if (!property) {
      return <div>No property data available.</div>;
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
      id,
    } = property;

  return (
    <div className="bg-white shadow-md rounded-lg m-2 md:m-0 lg:m-0 p-6 flex flex-col justify-between h-full">
      <div>
        <img
          src={image}
          alt={estate_title}
          className="w-full h-50 object-cover mb-4 rounded-lg"
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

      <Link to={`/details/${id}`}>
        <button className="mt-4 font-semibold bg-gradient-to-r from-pink-400 to-violet-600 hover:from-violet-500 hover:to-pink-500 text-white py-2 px-4 rounded-lg">
          View Property
        </button>
      </Link>
    </div>
  );
};

PropertyCard.propTypes = {
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

export default PropertyCard;
