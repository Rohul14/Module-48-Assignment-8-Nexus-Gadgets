import img from "../../../src/assets/banner.jpg";

const BannerImg = () => {
  return (
      <div className="px-14 lg:px-[230px] mb-10 mt-110 lg:mt-64 relative z-20">
        <div className="border border-[#FFFFFF] bg-[#FFFFFF40] rounded-xl p-4 lg:p-6">
          <img
            className="h-1/2 lg:h-[490px] w-full object-cover rounded-md"
            src={img}
            alt=""
          />
        </div>
      </div>
  );
};

export default BannerImg;
