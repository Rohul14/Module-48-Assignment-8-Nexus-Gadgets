import React, { useEffect, useState } from "react";
import Gadgets from "../Gadgets/Gadgets";

const AllGadgets = () => {
  const [allGadgets, setAllGadgets] = useState([]);
  const [cat, setCat] = useState("all products");

  useEffect(() => {
    fetch("gadgets.json")
      .then((res) => res.json())
      .then((data) => {
        const filterData = data.filter(
          (item) => item.category?.toLowerCase() === cat
        );
        if (cat === "all products") {
          setAllGadgets(data);
        } else {
          setAllGadgets(filterData);
        }
      });
  }, [cat]);

  // console.log(allGadgets);
  // console.log(cat);
  return (
    <div className="mx-5 lg:mx-32">
      <h1 className="text-3xl font-sora text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 my-10">
        <div className="lg:min-w-[20%]">
          <div className="bg-white rounded-2xl  flex flex-col gap-4 p-6">
            <button
              onClick={() => setCat("all products")}
              className={`${
                cat === "all products"
                  ? "bg-[#9538E2] text-white"
                  : "bg-[#eae9f099]"
              } font-bold font-sora py-3 px-6 text-lg rounded-3xl hover:bg-[#9538E2] hover:text-white `}
            >
              All Product
            </button>
            <button
              onClick={() => setCat("laptop")}
              className={`${
                cat === "laptop"
                  ? "bg-[#9538E2] text-white"
                  : "bg-[#eae9f099]"
              } font-bold font-sora py-3 px-6 text-lg rounded-3xl hover:bg-[#9538E2] hover:text-white `}
            >
              Laptops
            </button>
            <button
              onClick={() => setCat("mobile")}
              className={`${
                cat === "mobile" ? "bg-[#9538E2] text-white" : "bg-[#eae9f099]"
              } font-bold font-sora py-3 px-6 rounded-3xl text-lg  hover:bg-[#9538E2] hover:text-white `}
            >
              Phones
            </button>
            <button
              onClick={() => setCat("accessories")}
              className={`${
                cat === "accessories"
                  ? "bg-[#9538E2] text-white"
                  : "bg-[#eae9f099]"
              } font-bold font-sora py-3 px-6 rounded-3xl text-lg  hover:bg-[#9538E2] hover:text-white `}
            >
              Accessories
            </button>
            <button
              onClick={() => setCat("smartwatch")}
              className={`${
                cat === "smartwatch"
                  ? "bg-[#9538E2] text-white"
                  : "bg-[#eae9f099]"
              } font-bold font-sora py-3 px-6 rounded-3xl text-lg  hover:bg-[#9538E2] hover:text-white `}
            >
              Smart Watches
            </button>
          </div>
        </div>
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 ">
          {allGadgets.map((gadgets, index) => (
            <Gadgets key={index} gadgets={gadgets}></Gadgets>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllGadgets;
