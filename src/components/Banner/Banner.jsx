

const Banner = () => {
  return (
    <div className="absolute w-[96%] top-[30px] left-1/2 -translate-x-1/2">
      <div className=" bg-[#9538E2]  rounded-xl">
        <div className="text-center py-28">
          <h1 className="text-5xl text-white lg:w-2/3 mx-auto font-bold font-sora">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="mx-3 my-5 lg:w-1/2 lg:mx-auto text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="lg:pb-36">
            <button className="py-3 cursor-pointer hover:border-2 hover:border-indigo-600 bg-white text-[#9538E2] px-8 font-bold rounded-3xl ">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
