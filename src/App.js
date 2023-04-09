//css
import './App.css';

//react-router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//component
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import SingleQuizPage from './pages/SingleQuizPage/SingleQuizPage';


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/single/:quiz' element={<SingleQuizPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
