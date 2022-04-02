import { Usertype } from "../types/UserType";
import instance from "./instance";

export const signup = (signup:Usertype) =>{
      const url = `/signup`;
      return instance.post(url, signup)
}