import { createContext, useState } from "react";
import { getStoredCardList, getStoredWishList } from "../Utility/addToLs";
import { gadgetData } from "../data/data";


const StateContext=createContext()

export const ContextProvider=({children})=>{

  const [cardListCount,setCardListCount]=useState(getStoredCardList())
  const [wishListCount,setWishListCount]=useState(getStoredWishList())
  const allGadgets = gadgetData;
   const [card, setCard] = useState([]);
    const [wish, setWish] = useState([]);
    const [totalPriceInCard,setTotalPrice]=useState()

  const handleValue=()=>{
    setCardListCount(getStoredCardList())
    setWishListCount(getStoredWishList())
  }

  const handleData=()=>{
        const cardList = getStoredCardList()
        const wishList = getStoredWishList()
        const filterCard = allGadgets.filter((gadgets) =>
          cardList.includes(gadgets.product_id)
        );
        const filterWish = allGadgets.filter((gadgets) =>
          wishList.includes(gadgets.product_id)
        );
        const totalPrice=filterCard.reduce((sum,item)=> sum +item.price,0)
        setCard(filterCard);
        setWish(filterWish);
        setTotalPrice(totalPrice)
  }

  const handlerSort=()=>{
    const sortCartPrice=[...card].sort((a,b)=> a.price - b.price)
    setCard(sortCartPrice)
    
  }
  return( 
    <StateContext.Provider value={{handleValue,cardListCount,wishListCount, card, wish, totalPriceInCard, handleData, handlerSort}}>
      {children}
    </StateContext.Provider>
  )
}

export default StateContext