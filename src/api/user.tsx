import { Usertype } from "../types/UserType";
import instance from "./instance";

export const signup = (signup:Usertype) =>{
      const url = `/signup`;
      return instance.post(url, signup)
}
export const signin = (signin:any) =>{
    const url = `/signin`;
    return instance.post(url, signin)
}