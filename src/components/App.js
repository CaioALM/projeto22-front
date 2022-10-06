
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './layouts/Header';
import InitialPage from './InitialPage'
import RegisterPage from './RegisterPage'
import LoginPage from './LoginPage'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={< InitialPage/>} />
        <Route path="/register" element={< RegisterPage/>} />
        <Route path="/login" element={< LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;