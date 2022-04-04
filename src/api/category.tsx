import instance from "./instance"

export const listCategory = () =>{
    const url = `category`
    return instance.get(url)
}
export const createCategory = (category:any) =>{
    const url = `category`
    return instance.post(url, category)
}
export const removeCategory = (_id:number) =>{
    const url = `category/${_id}`
    return instance.delete(url)
}
export const updateCategory = (product:any) =>{
    const url = `category/${product._id}`
    return instance.put(url,product)
}