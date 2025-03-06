import PropTypes from 'prop-types';
import { MdOutlineCancel } from "react-icons/md";

const WishList = ({wish}) => {
    const{product_title,description,price,product_image,}=wish
    return (
        <div>
            <div className='flex flex-col lg:flex-row justify-between items-center bg-white border-2 border-[#f1ebeb] my-5 p-4 rounded-lg'>
                <div className='flex flex-col lg:flex-row items-center gap-6'>
                    <img className='lg:w-28' src={product_image} alt="" />
                    <div>
                        <h1 className='text-2xl font-sora font-bold'>{product_title}</h1>
                        <p>{description}</p>
                        <p className='text-lg font-sora font-semibold'>Price : {price}</p>
                    </div>
                </div>
                <div>
                    <p className='text-3xl text-red-500 cursor-pointer'><MdOutlineCancel /></p>
                </div>
            </div>
        </div>
    );
};

WishList.propTypes={
    wish:PropTypes.array
}

export default WishList;