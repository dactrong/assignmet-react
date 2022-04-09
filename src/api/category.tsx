import { isAuthenticate } from "../utils/localStogate"
import instance from "./instance"
const { token, user } = isAuthenticate()
export const listCategory = () =>{
    const url = `category`
    return instance.get(url)
}
export const createCategory = (category:any) =>{
    const url = `category/${user.id}`
    return instance.post(url, category , {

        headers:{
            "authorization":`Bearer ${token}`
        }
    } )
}
export const removeCategory = (_id:number) =>{
    const url = `category/${_id}`
    return instance.delete(url)
}
export const updateCategory = (product:any) =>{
    const url = `category/${product._id}`
    return instance.put(url,product)
}