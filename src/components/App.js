
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={< teste/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;