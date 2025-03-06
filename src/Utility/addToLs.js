import { toast } from 'react-toastify';


const getStoredCardList=()=>{
    const storedListStr=localStorage.getItem('card-list');
    if (storedListStr) {
        const storedList=JSON.parse(storedListStr);
        return storedList;
    }else{
        return [];
    }
}

const addStoredCardList=(id)=>{
    const storedList=getStoredCardList();
    if (storedList.includes(id)) {
        toast.error('Already This Gadgets is Added to your card list')
    }else{
        storedList.push(id);
        const storedListStr=JSON.stringify(storedList);
        localStorage.setItem('card-list',storedListStr);
        toast.success('This Gadgets is Added to your card list')
    }
}


const getStoredWishList=()=>{
    const storedListStr=localStorage.getItem('wish-list');
    if (storedListStr) {
        const storedList=JSON.parse(storedListStr);
        return storedList;
    }else{
        return [];
    }
}

const addStoredWishList=(id)=>{
    const storedList=getStoredWishList();
    if (storedList.includes(id)) {
        toast.error('Already This Gadgets is added to your wish list')
    }else{
        storedList.push(id);
        const storedListStr=JSON.stringify(storedList);
        localStorage.setItem('wish-list',storedListStr)
        toast.success('This Gadgets is added to your wish list')
    }
}

export {addStoredCardList,addStoredWishList,getStoredCardList,getStoredWishList}