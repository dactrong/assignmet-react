import instance from "./instance"

export const listCategory = (category:any) =>{
    const url = `category`
    return instance.get(url, category)
}