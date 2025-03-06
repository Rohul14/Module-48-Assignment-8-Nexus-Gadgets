import { createContext, useState } from "react";
import { getStoredCardList, getStoredWishList } from "../Utility/addToLs";

const StateContext=createContext();

export const ContextProvider = ({ children }) => {
  const [wishListCount, setWishListCount]=useState([])
  const [cardListCount, setCardListCount]=useState([])

  const handleValue=()=>{
    setWishListCount(getStoredWishList())
    setCardListCount(getStoredCardList())
  }

    return (
      <StateContext.Provider value={{wishListCount,cardListCount,setWishListCount,handleValue}}>
        {children}
      </StateContext.Provider>
    );
  };

  export default StateContext;