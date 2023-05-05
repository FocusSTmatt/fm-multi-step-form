import NavBar from './components/NavBar';
import {BrowserRouter, Route, NavLink} from "react-router-dom"
import {Routes} from "react-router-dom"
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';



function App() {
  return (
    <>
     <BrowserRouter>
     <NavBar />
      <Routes>
        <Route exact path="/" element={<Page1/>}/>
        <Route path="/Page2" element={<Page2/>}/>
        <Route path="/Page3" element={<Page3/>}/>
        <Route path="/Page4" element={<Page4/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;