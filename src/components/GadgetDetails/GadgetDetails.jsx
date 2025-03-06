import { useLoaderData, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { addStoredCardList, addStoredWishList } from "../../Utility/addToLs";
import { useContext } from "react";
import StateContext from "../../context/StateContext";

const GadgetDetails = () => {
  const { productId } = useParams();
  const {handleValue}=useContext(StateContext)

  const allGadgets = useLoaderData();

  const gadget = allGadgets.find((gadget) => gadget.product_id === productId);

  const {
    availability,
    description,
    price,
    product_image,
    product_title,
    rating,
    Specification,
    product_id,
  } = gadget;

  const handlerAddCard = (id) => {
    addStoredCardList(id);
    handleValue()
  };
  const handlerWishCard = (id) => {
    addStoredWishList(id);
    handleValue()
  };

  // console.log(productId, gadget);

  return (
    <div>
      <div className="bg-[#9538E2] p-10 pb-52 text-center text-white ">
        <h1 className="text-3xl font-bold font-sora">Product Details</h1>
        <p className="lg:w-2xl lg:mx-auto my-2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="mx-10 lg:mx-32 mb-16 flex gap-8 flex-col lg:flex-row bg-white rounded-xl p-6 -mt-44">
        <div className="flex-1">
          <img src={product_image} alt="" />
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <h3 className="text-3xl font-sora font-bold">{product_title}</h3>
          <p className="text-xl font-sora font-semibold">Price : {price}</p>
          <p>
            {availability ? (
              <button className="border text-lg border-[#309C08] px-4 py-2 rounded-3xl text-[#309C08] hover:border hover:border-[#309C08] bg-[#d7f2ce]">
                In Stoke
              </button>
            ) : (
              <button className="px-4 py-2 rounded-3xl text-[#FFF] hover:border hover:border-[#f23f3f] bg-[#f23f3f]">
                Out Off Stoke
              </button>
            )}
          </p>
          <div className="flex flex-wrap lg:flex-row items-center gap-1">
            <p className="font-sora text-xl font-bold">Description :</p>
            <span>{description}</span>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-sora text-xl font-bold">Specification :</p>
            <div className="">
              {Specification.map((specification, idx) => (
                <p key={idx}>{specification}</p>
              ))}
            </div>
          </div>
          <p>
            <span className="font-sora text-xl font-bold">Rating</span> :{" "}
            <button className="px-3 py-1.5 bg-amber-300 text-white rounded-3xl">
              {rating}
            </button>
          </p>
          <div>
            <p className="flex gap-0.5 text-[gold] text-3xl">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </p>
          </div>
          <div className="flex gap-4 ">
            <button
              onClick={() => handlerAddCard(product_id)}
              className="flex gap-2 cursor-pointer text-xl font-medium items-center bg-[#9538E2] text-white hover:text-[#9538E2] hover:bg-white hover:border hover:border-[#9538E2] py-4 px-6 rounded-4xl"
            >
              <span>Add To Card</span> <MdOutlineShoppingCart />
            </button>
            <button
              onClick={() => handlerWishCard(product_id)}
              className="border p-3 cursor-pointer rounded-full text-3xl  hover:text-[#9538E2] hover:bg-white hover:border hover:border-[#9538E2]"
            >
              <CiHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

GadgetDetails.propTypes = {
  gadgets: PropTypes.array,
};

export default GadgetDetails;
