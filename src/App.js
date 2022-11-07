import { Route, Routes } from 'react-router';
import './App.css'
import Header from './Components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element />
      </Routes>
    </>
  );
}

export default App;
