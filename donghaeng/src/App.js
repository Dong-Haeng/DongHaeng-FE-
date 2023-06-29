import './App.css';

import Header from './componet/header';
import Footer from './componet/footer';
import main from './page/main';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path='/' Component={main}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
