import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Gadgets = ({gadgets}) => {
//   console.log(gadgets);
  const { product_title, product_image, price, product_id } = gadgets;
  return (
    <div className="bg-white p-8 rounded-xl">
      <div className="flex items-center justify-center rounded-lg bg-white p-5">
        <img className="h-[200px]" src={product_image} alt="" />
      </div>
      <div className="flex flex-col justify-between min-h-[150px] mt-3">
        <div className="flex-grow">
          <h1 className="text-xl font-semibold font-sora ">{product_title}</h1>
          <p className="font-sora my-3">Price: {price}</p>
        </div>
        <div>
          <Link to={`/gadgetDetails/${product_id}`}>
            <button className=" py-3 w-full cursor-pointer hover:border-2 border border-[#9538E2] hover:border-indigo-600 bg-white text-[#9538E2] px-8 font-bold rounded-3xl ">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Gadgets.propTypes = {
  gadgets: PropTypes.array,
};

export default Gadgets;
