import instance from "./instance";

export const createProduct = (product:any) =>{
    const url = `product`
    return instance.post(url,product)
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
export const update = (product:any) =>{
    const url = `product/${product.id}`
    return instance.put(url,product)
}