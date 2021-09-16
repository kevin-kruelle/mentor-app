import './App.css';
import Header from "../src/Components/header";
import MainImage from "./images/kid_at_computer.jpg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Gallery from './Components/mentorGallery';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/gallery" component={Gallery} />
        <div className="mainImage">
          <img style={{width: "100%"}}src={MainImage} alt="Kid at Computer Coding"/>
        </div>
      </div>
    </Router>
  );
}

export default App;
