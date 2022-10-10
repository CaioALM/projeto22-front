
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from "../contexts/UserContext";
import {useState} from "react";

import Header from './layouts/Header';
import InitialPage from './InitialPage'
import RegisterPage from './RegisterPage'
import LoginPage from './LoginPage'

export default function App() {
  const [userInfo, setUserInfo] = useState({});

  return (
    <UserContext.Provider value={{userInfo, setUserInfo}}> 
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={< InitialPage/>} />
        <Route path="/register" element={< RegisterPage/>} />
        <Route path="/login" element={< LoginPage/>} />
        
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}