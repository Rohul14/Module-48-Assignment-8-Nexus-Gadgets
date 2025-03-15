import React, { useContext, useEffect, useState } from "react";
import CardList from "../CardList/CardList";
import WishList from "../WishList/WishList";
import StateContext from "../../context/StateContext";
import { removeAllCardLStore } from "../../Utility/addToLs";
import Modal from "./Modal";
import { Helmet } from "react-helmet";


const Dashboard = () => {
  const {card, wish, handleData, handlerSort, handleValue, totalPriceInCard}=useContext(StateContext)

  const [cart, setCart] = useState("card");
  useEffect(() => {
    handleData()
  }, []);
  

  const handlerRemoveAllCard=()=>{
    removeAllCardLStore()
    handleData()
    handleValue()
    document.getElementById("my_modal_1").showModal()
  }

  return (
    <div>
      <Modal/>
      <Helmet>
        <title>Dashboard-Nexus</title>
      </Helmet>
      <div className="bg-[#9538E2] p-10 text-center text-white ">
        <h1 className="text-3xl font-bold font-sora">Dashboard</h1>
        <p className="lg:w-2xl lg:mx-auto my-2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex gap-5 justify-center items-center mt-5">
          <button
            onClick={() => setCart("card")}
            className={`${
              cart === "card"
                ? "bg-white text-[#9538E2] "
                : " bg-[#9538E2]   border border-white"
            }" px-5 py-2 rounded-3xl cursor-pointer font-semibold"`}
          >
            Cart
          </button>
          <button
            onClick={() => setCart("wish")}
            className={`${
              cart === "wish"
                ? "bg-white text-[#9538E2] "
                : " bg-[#9538E2]   border border-white"
            }" px-5 py-2 rounded-3xl cursor-pointer font-semibold"`}
          >
            Wishlist
          </button>
        </div>
      </div>
      {cart === "card" ? (
        <div className="mx-5 lg:mx-32">
          <div className="flex flex-col lg:flex-row justify-between my-6">
            <h1 className="text-2xl font-sora font-bold my-4">Cart</h1>
            <div className="flex  flex-col lg:flex-row gap-3 items-center">
              <p className="text-2xl font-sora font-bold  lg:m-0">Total cost:{totalPriceInCard}</p>
              <button 
              onClick={handlerSort}
              className="bg-white text-[#9538E2] border border-[#9538E2] px-5 py-2 rounded-3xl cursor-pointer font-semibold"
              >Sort by Price</button>

              <button
              onClick={handlerRemoveAllCard} 
              className="bg-[#9538E2] text-[#FFF] border border-[#9538E2] px-5 py-2 rounded-3xl cursor-pointer font-semibold"
              >Purchase</button>
            </div>
          </div>
          {card.map((item) => (
            <CardList key={item.product_id} cart={item}></CardList>
          ))}
        </div>
      ) : (
        <div className="mx-5 lg:mx-32">
          <div className="my-6">
          <h1 className="text-2xl font-sora font-bold">WishList</h1>
          </div>
          {wish.map((item) => (
            <WishList key={item.product_id} wish={item}></WishList>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
