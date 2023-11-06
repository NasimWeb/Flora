import { createContext } from "react";


const authContext = createContext({
    isLogedIn : false,
    token : null,
    userInfos : {},
    logIn : () => {},
    logOut : () => {}
})



export default authContext