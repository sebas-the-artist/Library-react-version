//import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Books from "./pages/Books"

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/books" exact component={Books} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;

/*
import Landing from "./components/Landing";
import Highlights from "./components/Highlights";
import Featured from "./components/Featured";
import Discounted from "./components/Discounted"
import Explore from "./components/Explore"
*/