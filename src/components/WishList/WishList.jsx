import PropTypes from 'prop-types';
import { useContext } from 'react';
import { MdOutlineCancel } from "react-icons/md";
import StateContext from '../../context/StateContext';
import { removeLsWishList } from '../../Utility/addToLs';

const WishList = ({wish}) => {
    const{product_title,description,price,product_image,product_id}=wish
    const {handleValue,handleData}=useContext(StateContext)
    const handlerRemoveWish=(id)=>{
        removeLsWishList(id)
        handleData()
        handleValue()
    }
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
                    <p 
                    onClick={()=>handlerRemoveWish(product_id)}
                    className='text-3xl text-red-500 cursor-pointer'><MdOutlineCancel /></p>
                </div>
            </div>
        </div>
    );
};

WishList.propTypes={
    wish:PropTypes.array
}

export default WishList;