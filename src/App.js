import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/Home/About/About';
import Friends from './components/Home/Friends/Friends';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="home" element={<Home />}/>
        <Route path ="friends" element={<Friends></Friends>}></Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
