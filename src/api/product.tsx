import instance from "./instance";
import { isAuthenticated} from "../utils/localStogate"
const {token, user} = isAuthenticated()

export const createProduct = (product:any) =>{
    const url = `products/${user._id}`;
    return instance.post(url,product ,{
        headers: {
            "Authorization":`Bearer ${token}`
        }
    })
}

export const listProduct = () =>{
    const url = `products`
    return instance.get(url)
}
export const readProduct = (_id:number) =>{
    const url = `product/${_id}`
    return instance.get(url)
}
export const remove = (_id:number) =>{
    const url = `product/${_id}`
    return instance.delete(url)
}
export const updateProduct = (product:any) =>{
    const url = `product/${product._id}`
    return instance.put(url,product)
}