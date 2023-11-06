import { useRoutes } from "react-router-dom";
import routes from "./Routes";
import authContext from "./Contexts/authContext";
import infos from "./Contexts/infosContext";
import { useCallback, useState } from "react";
import { useEffect } from "react";
import 'atropos/css'

function App() {
  
  const router = useRoutes(routes);

  const [isLogedIn, setIsLogedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [userInfos, setUserInfos] = useState({});
  const [infosDetails,setInfosDetails] = useState({})

  const logIn = (userInfo, token) => {
    setToken(token);
    setIsLogedIn(true);
    localStorage.setItem("user", JSON.stringify({ token }));
    setUserInfos(userInfo);
  }

  const logOut = useCallback(() => {
    setToken(null);
    localStorage.removeItem("user");
    setUserInfos({});
  }, []);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    if (localStorageData) {
      fetch("http://localhost:4000/v1/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      }).then((res) => res.json()).then((result) => {
          setIsLogedIn(true);
          setUserInfos(result);
        });
    } else {
      setIsLogedIn(false);
    }
  }, []);

  useEffect(() => {
    fetch('http://localhost:4000/v1/infos/index')
    .then(res => res.json())
    .then(result => setInfosDetails(result))
  } ,[])

  return (
    <infos.Provider 
    value={infosDetails}>
    <authContext.Provider
      value={{
        isLogedIn,
        token,
        userInfos,
        setUserInfos,
        logIn,
        logOut,
      }}
    >
      {router}
    </authContext.Provider>
    </infos.Provider>
  );
}

export default App;
