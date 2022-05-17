import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ABOUT, HOME } from './routes/routes';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={ABOUT} element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;