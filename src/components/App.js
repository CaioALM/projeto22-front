
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './layouts/Header';
import InitialPage from './InitialPage'
import RegisterPage from './RegisterPage'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={< InitialPage/>} />
        <Route exact path="/register" element={< RegisterPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;