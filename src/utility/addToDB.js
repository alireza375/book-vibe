import { toast } from "react-toastify";

const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
}

const addToStoreReadList = (id) => {
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        toast('Book is already exists');
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        toast('Book added to read list');
    }
}

const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
}

const addToStoreWishList = (id) => {
    const storedList = getStoredWishList();
    if (storedList.includes(id)) {
        toast('already exists in the wish list');
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
        toast('Book added to wish list');
    }
}

export {addToStoreReadList};
export {addToStoreWishList};
export {getStoredReadList};
export {getStoredWishList};
