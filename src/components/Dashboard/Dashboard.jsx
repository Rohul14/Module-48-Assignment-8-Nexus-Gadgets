import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCardList, getStoredWishList } from "../../Utility/addToLs";
import CardList from "../CardList/CardList";
import WishList from "../WishList/WishList";

const Dashboard = () => {
  const [card, setCard] = useState([]);
  const [wish, setWish] = useState([]);

  const [cart, setCart] = useState("card");

  const allGadgets = useLoaderData();

  useEffect(() => {
    const cardList = getStoredCardList();
    const wishList = getStoredWishList();
    const filterCard = allGadgets.filter((gadgets) =>
      cardList.includes(gadgets.product_id)
    );
    const filterWish = allGadgets.filter((gadgets) =>
      wishList.includes(gadgets.product_id)
    );
    setCard(filterCard);
    setWish(filterWish);
  }, []);

  const handlerSort=()=>{
    const sortCartPrice=[...card].sort((a,b)=> a.price - b.price)
    setCard(sortCartPrice)
    
  }

  return (
    <div>
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
          <div className="flex justify-between my-6">
            <h1 className="text-2xl font-sora font-bold my-4">Cart</h1>
            <div className="flex gap-3 items-center">
              <p className="text-2xl font-sora font-bold">Total cost:</p>
              <button 
              onClick={handlerSort}
              className="bg-white text-[#9538E2] border border-[#9538E2] px-5 py-2 rounded-3xl cursor-pointer font-semibold">Sort by Price</button>
              <button className="bg-[#9538E2] text-[#FFF] border border-[#9538E2] px-5 py-2 rounded-3xl cursor-pointer font-semibold">Purchase</button>
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
