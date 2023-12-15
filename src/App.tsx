import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Main /> }>
          <Route index element={ <Home /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
