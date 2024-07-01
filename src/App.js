import './App.css';
import Home from './Home';
import Blogs from './Blogs';
import Contact from './Contact';
import NoPage from './NoPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <h1>Menu</h1>
      <a className="btn btn-primary m-1" href="/">Home</a>
      <a className="btn btn-primary m-1" href="/blogs">Blogs</a>
      <a className="btn btn-primary m-1" href="/contact">Contact</a>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NoPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
