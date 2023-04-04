//css
import './App.css';
//react-router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//component
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';


function App() {

  return (
    <>
      <NavBar />
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
