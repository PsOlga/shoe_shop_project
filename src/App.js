// https://www.figma.com/design/jKICn1FeW3eblJZSOeC8gW/%D0%A1%D0%BD%D0%B8%D0%BA%D0%B5%D1%80---%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD?node-id=2-5&node-type=frame&t=yZ5ECwOuceXTsnEj-0

// import Footer from './components/Footer';
// import HeaderApp from "./components/Header/index";
// import Main from './components/Main';
// import News from './components/News';
// import Cart from "./components/Cart";
// import Contacts from "./Contacts/index";
// import {Routes, Route} from "react-router-dom";

// import './App.css';


// function App() {
//   return (
//     <div className="App">
// <HeaderApp />
// <News />

// {/* делаем настройку маршрутов */}
// <Routes>
//   <Route path='/' element={<Main />}/>
//   <Route path='/cart' element={<Cart />}/>
//   <Route path='/contacts' element={<Contacts />}/> 
// </Routes>
// <Footer />
//     </div>
//   );
// }

// export default App;


import Footer from "./components/Footer";
import HeaderApp from "./components/Header/index";
import Main from "./components/Main";
import News from "./components/News";
import Cart from "./components/Cart";
import Contacts from "./Contacts/index";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeaderApp />
      <News />
      {/* Настройка маршрутов */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
