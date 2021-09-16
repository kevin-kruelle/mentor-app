import './App.css';
import Header from "../src/Components/header";
import MainImage from "./images/kid_at_computer.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainImage">
        <img style={{width: "100%"}}src={MainImage} alt="Kid at Computer Coding"/>
      </div>
    </div>
  );
}

export default App;
