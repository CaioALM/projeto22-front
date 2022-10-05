
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layouts/Header';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={< teste/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;