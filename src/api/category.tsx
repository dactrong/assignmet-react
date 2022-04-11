import { isAuthenticate } from "../utils/localStogate"
import instance from "./instance"
const a = JSON.parse(localStorage.getItem('user') as string);

export const listCategory = () => {
    const url = `category`
    return instance.get(url)
}
export const createCategory = (category: any) => {
    const url = `category/${a.user.id}`
    return instance.post(url, category, {

        headers: {
            "authorization": `Bearer ${a.token}`
        }
    })
}
export const removeCategory = (_id: number) => {
    const url = `category/${_id}/${a.user.id}`
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