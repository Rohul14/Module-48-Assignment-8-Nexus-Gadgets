import { Helmet } from "react-helmet";


const Statistics = () => {
  return (
    <div>
      <Helmet>
        <title>Statistics-Nexus</title>
      </Helmet>
      <div className="bg-[#9538E2] p-10  text-center text-white mb-10 ">
        <h1 className="text-3xl font-bold font-sora">Statistics</h1>
        <p className="lg:w-2xl lg:mx-auto my-2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
    </div>
  );
};

export default Statistics;
