import instance from "./instance";

export const createProduct = (product:any) =>{
    const url = `product`
    return instance.post(url,product)
}
export const listProduct = () =>{
    const url = `product`
    return instance.post(url)
}
export const readProduct = (_id:number) =>{
    const url = `product/${_id}`
    return instance.post(url)
}
export const remove = (_id:number) =>{
    const url = `product/${_id}`
    return instance.post(url)
}
export const update = (product:any) =>{
    const url = `product/${product.id}`
    return instance.post(url,product)
}