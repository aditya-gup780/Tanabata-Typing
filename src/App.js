
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TextArea from './pages/TextArea';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
// import loop from './components/ScrollEffect'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
         <Route exact path="/" element={<Home></Home>} />
        </Routes>
        <Routes>
      
          <Route exact path="/textarea" element={<TextArea></TextArea>} />
        </Routes>
        <Routes>
         <Route exact path="/dashboard" element={<Dashboard></Dashboard>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
