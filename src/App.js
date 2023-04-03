//css
import './App.css';
//react-router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//component
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';

import quizes from './quizes.json'

function App() {

  console.log(quizes);

  fetch('../src/quizes.json').then(resp => resp.json()).then(data => console.log(data))


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
