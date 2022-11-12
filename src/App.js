// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import NewsComp from './components/NewsComp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
//Pagesize for every page by one variable
let pagesize=12
function App() {
  return (
    <>
    <Router>
    <NavBar></NavBar>
    <div  id='mainpage'>
      <Routes>
          <Route exact path='/'  element={<NewsComp key="general" category="General" pageSize={pagesize}/>}>
          </Route>

          <Route exact path='/sports' element={<NewsComp key="sports" category="Sports" pageSize={pagesize}/>}>           
          </Route>

         <Route exact path='/entertainment' element={<NewsComp key="entertainment" category="Entertainment" pageSize={pagesize}/>}>
          </Route>

         <Route exact path='/science'  element={<NewsComp key="science" category="Science" pageSize={pagesize}/>}>
        </Route>

         <Route exact path='/business' element={<NewsComp  key="business" category="Business" pageSize={pagesize}/>}>
        </Route>

         <Route exact path='/technology' element={<NewsComp  key="technology" category="Technology" pageSize={pagesize}/>}>
        </Route>

         <Route exact path='/health' element={<NewsComp  key="health" category="Health" pageSize={pagesize}/>}>
        </Route>
        
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
