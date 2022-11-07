import { Route, Routes } from 'react-router';
import './App.css'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
