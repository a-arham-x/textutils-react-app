import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [search, searchLook] = useState("btn btn-outline-success");
  const [alert, setAlert] = useState(null);
  const [bg, setBg] = useState("#002D62");

  const toggleDarkMode1 = () => {
    setBg("#002D62");
    if (mode === "dark") {
      document.body.style.backgroundColor = bg;
    }
  }

  const toggleDarkMode2 = () => {
    setBg("#8B0000")
    if (mode === "dark") {
      document.body.style.backgroundColor = bg;
    }
  }

  const toggleDarkMode3 = () => {
    setBg("#FF4500")
    if (mode === "dark") {
      document.body.style.backgroundColor = bg;
    }
  }

  const toggleDarkMode4 = () => {
    setBg("#4B5320")
    if (mode === "dark") {
      document.body.style.backgroundColor = bg;
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      searchLook("btn btn-outline-primary");
      document.body.style.backgroundColor = bg;
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled.", "success");
    } else {
      setMode("light");
      searchLook("btn btn-outline-success");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled.", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} search={search} bg={bg} toggleMode={toggleMode} toggleDarkMode1={toggleDarkMode1} toggleDarkMode2={toggleDarkMode2} toggleDarkMode3={toggleDarkMode3} toggleDarkMode4={toggleDarkMode4} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* <Route path="/about">
              <About mode={mode} />
            </Route>
            <Route path="/">
              <TextForm heading="Enter The Text To Analyze" mode={mode} bg={bg} />
            </Route> */}
            <Route exact path="/" element={<TextForm heading="Enter The Text To Analyze" mode={mode} bg={bg} />}/>
            <Route exact path="/about" element={<About mode={mode} bg={bg} />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}


export default App;
