import { isAuthenticate } from "../utils/localStogate"
import instance from "./instance"
const a = JSON.parse(localStorage.getItem('user') as string);
// const {user, token} = isAuthenticate()
export const listCategory = () => {
    const url = `category`
    return instance.get(url)
}
export const createCategory = (category: any) => {
    const url = `category/${a.user._id}`
    return instance.post(url, category, {
        headers: {
            "authorization": `Bearer ${a.token}`
        }
    })
}
export const removeCategory = (_id: number) => {
    const url = `category/${_id}/${a.user._id}`
    return instance.delete(url, {
        headers: {
            "authorization": `Bearer ${a.token}`
        }
    })
}
export const updateCategory = (product: any) => {
    const url = `category/${product._id}`
    return instance.put(url, product)
}

export const readCategory = (_id: number) => {
    const url = `category/read/${_id}`
    return instance.get(url)
}


export const listCateProduct =(id:number)=>{
    const url = "/category/"+id;
    return instance.get(url)
}