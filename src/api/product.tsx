import instance from "./instance";
const a = JSON.parse(localStorage.getItem('user') as string);
 
export const createProduct = (product: any) => {
    const url = `products/${a.user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${a.token}`
        }
    })
}
export const listProduct = () => {
    const url = `products`
    return instance.get(url)
}
export const readProduct = (_id: number) => {
    const url = `product/${_id}`
    return instance.get(url)
}
export const remove = (_id: number) => {
    const url = `product/${_id}/${a.user._id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${a.token}`
        }
    })
}
export const updateProduct = (product: any) => {
    const url = `product/${product._id}/${a.user._id}`
    return instance.put(url, product, {
        headers: {
            "Authorization": `Bearer ${a.token}`
        }
    })
}