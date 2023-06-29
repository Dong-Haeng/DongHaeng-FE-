import './App.css';

import Header from './componet/Header'
import Footer from './componet/footer';
import main from './page/main';
import Login from './page/Login';
import Signup from './page/Signup';
import Select from './page/Select';

import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { DelManger, delUserID, setlogout } from './reducers/data';

function App() {

  var dispacth = useDispatch();

  useEffect(()=>{
    var str = window.location.href;
    if(str === "http://localhost:3000/"){
      dispacth(setlogout());
      dispacth(delUserID());
      dispacth(DelManger());
    }
  },[dispacth]
  );


  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <Header/>

      <Routes>
        <Route path='/' Component={main}/>
        <Route path='/login' Component={Login}/>
        <Route path='/signup' Component={Signup}/>
        <Route path='/select' Component={Select}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
