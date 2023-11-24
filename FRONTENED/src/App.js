import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TextArea from "./pages/Textarea/Textarea";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Loginsignup from "./pages/loginsignup/loginsignup";
// import loop from './components/ScrollEffect'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/Tanabata-Typing" element={<Home></Home>} />
        </Routes>
        <Routes>
          <Route exact path="/textarea" element={<TextArea></TextArea>} />
        </Routes>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard></Dashboard>} />
        </Routes>
        <Routes>
          <Route
            exact
            path="/Loginsignup"
            element={<Loginsignup></Loginsignup>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
