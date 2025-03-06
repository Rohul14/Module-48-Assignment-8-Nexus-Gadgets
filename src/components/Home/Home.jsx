import AllGadgets from '../AllGadgets/AllGadgets';
import Banner from '../Banner/Banner';
import BannerImg from '../BannerImg/BannerImg';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerImg></BannerImg>
            <AllGadgets></AllGadgets>
        </div>
    );
};

export default Home;