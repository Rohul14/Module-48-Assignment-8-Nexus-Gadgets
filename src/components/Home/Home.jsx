import {Helmet} from "react-helmet";
import AllGadgets from "../AllGadgets/AllGadgets";
import Banner from "../Banner/Banner";
import BannerImg from "../BannerImg/BannerImg";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home-Nexus</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Banner></Banner>
      <BannerImg></BannerImg>
      <AllGadgets></AllGadgets>
    </div>
  );
};

export default Home;
