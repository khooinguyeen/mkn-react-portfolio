import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/mkn-react-portfolio/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/mkn-react-portfolio/about/" element={<About />} />
          <Route path="/mkn-react-portfolio/contact/" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
