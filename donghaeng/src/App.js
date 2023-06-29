import './App.css';

import Header from './componet/header';
import Footer from './componet/footer';
import main from './page/main';
import Login from './page/Login';
import Signup from './page/Signup';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <Header/>

      <Routes>
        <Route path='/' Component={main}/>
        <Route path='/login' Component={Login}/>
        <Route path='/signup' Component={Signup}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
