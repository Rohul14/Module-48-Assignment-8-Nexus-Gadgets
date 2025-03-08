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

const removeLsCardList=(id)=>{
    const storedList=getStoredCardList()
    if (storedList.includes(id)) {
        const storedFilter=storedList.filter(item =>item !== id)
        console.log(storedFilter)
        const storedListStr=JSON.stringify(storedFilter);
        localStorage.setItem('card-list',storedListStr)
        toast.success('Remove successfully')
    }
}
const removeLsWishList=(id)=>{
    const storedList=getStoredWishList()
    if (storedList.includes(id)) {
        const storedFilter=storedList.filter(item =>item !== id)
        console.log(storedFilter)
        const storedListStr=JSON.stringify(storedFilter);
        localStorage.setItem('wish-list',storedListStr)
        toast.success('Remove successfully')
    }
}

const removeAllCardLStore=()=>{
    const allCard=getStoredCardList()
    localStorage.clear(allCard)
}

export {addStoredCardList,addStoredWishList,getStoredCardList,getStoredWishList,removeLsCardList,removeLsWishList,removeAllCardLStore}