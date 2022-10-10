
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from "../contexts/UserContext";
import {useState} from "react";

import Header from './layouts/Header';
import InitialPage from './InitialPage'
import RegisterPage from './RegisterPage'
import LoginPage from './LoginPage'
import SchedulesPage from './SchedulesPage'
import PaymentsPage from './PaymentsPage'

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
        <Route path="/schedules" element={< SchedulesPage/>} />
        <Route path="/payments" element={< PaymentsPage/>} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}