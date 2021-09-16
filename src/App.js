import './App.css';
import Header from "../src/Components/header";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Gallery from './Components/MentorGallery';
import home from './Components/home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={home} />
        <Route path="/gallery" component={Gallery} />
        
      </div>
    </Router>
  );
}

export default App;
