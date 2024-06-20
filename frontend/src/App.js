/* eslint-disable no-unused-vars */
import { HashRouter as Router, Route,Routes} from "react-router-dom";
import Bookslist from "./components/Bookslist";
import Wordslist from "./components/Wordslist";
import Library from "./components/Library";
import home from "./pages/home";
import Home1 from "./pages/Home1";
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route exact path="/" Component={Home1}></Route>
      <Route path="/books" exact Component={Bookslist}></Route>
      <Route path="/words" Component={Wordslist}></Route>
      </Routes>
    </div>
    </Router>
  );
 
}

export default App;
