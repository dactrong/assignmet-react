import { Usertype } from "../types/UserType";


export const authenticate = (user: Usertype, next:()=>void) =>{
       localStorage.setItem('user', JSON.stringify(user))
       next();
}

export const isAuthenticated = () => {
    if(!localStorage.getItem('user')) return
    return JSON.parse(localStorage.getItem('user') as string)
}