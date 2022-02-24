import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/home";
import Userinfohome from "./components/userinfohome";
import Formbody from "./components/formbody";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/users/:id" element={<Userinfohome/>}></Route>
        <Route path="/form" element={<Formbody/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
