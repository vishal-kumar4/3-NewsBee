// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import NewsComp from './components/NewsComp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>

    <Router>

    <NavBar></NavBar>
    <div  id='mainpage'>
      <Routes>
          <Route exact path='/'  element={<NewsComp key="general" category="general" pageSize={12}/>}>
          </Route>

          <Route exact path='/sports' element={<NewsComp key="sports" category="sports" pageSize={12}/>}>           
          </Route>

         <Route exact path='/entertainment' element={<NewsComp key="entertainment" category="entertainment" pageSize={12}/>}>
          </Route>

         <Route exact path='/science'  element={<NewsComp key="science" category="science" pageSize={12}/>}>
        </Route>

         <Route exact path='/business' element={<NewsComp  key="business" category="business" pageSize={12}/>}>
        </Route>

         <Route exact path='/technology' element={<NewsComp  key="technology" category="technology" pageSize={12}/>}>
        </Route>

         <Route exact path='/health' element={<NewsComp  key="health" category="health" pageSize={12}/>}>
        </Route>
        
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
