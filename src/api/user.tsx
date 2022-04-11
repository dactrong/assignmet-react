import { Usertype } from "../types/UserType";
import instance from "./instance";
const a = JSON.parse(localStorage.getItem('user') as string);
export const signup = (signup:Usertype) =>{
      const url = `/signup`;
      return instance.post(url, signup)
}
export const signin = (signin:any) =>{
    const url = `/signin`;
    return instance.post(url, signin)
}
export const listUser = () =>{
    const url = `/listUser`;
    return instance.get(url)
}
export const removeUser = (_id: number) => {
    const url = `/remove/${_id}/${a.user._id}`
    return instance.delete(url, {
        headers: {
            "authorization": `Bearer ${a.token}`
        }
    })
}