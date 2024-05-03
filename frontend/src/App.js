import './App.css';



import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
 
import Home from './pages/Home';    


function App() {
  return (
    <div>
      <Router>
      <Routes>

        <Route exact path ="/" element={<Home/>}/>
        <Route exact path ="/login" element={<Home/>}/>
        <Route exact path ="/Sign" element={<Home/>}/>


        
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
