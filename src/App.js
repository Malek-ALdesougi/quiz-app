//css
import './App.css';

//react-router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//component
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import SingleQuizPage from './pages/SingleQuizPage/SingleQuizPage';
import PreviewAnswers from './components/PreviewAnswers/PreviewAnswers';


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/single/:quiz' element={<SingleQuizPage />}></Route>
          <Route path='/preview/:quiz' element={<PreviewAnswers />}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
