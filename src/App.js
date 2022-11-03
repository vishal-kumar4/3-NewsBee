// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import NewsComp from './components/NewsComp';


function App() {
  //apple button after clicking 

  return (
    <>
    <div>

    <NavBar></NavBar>
    </div>


<div  id='mainpage'>

    {/* <NewsComp link="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0ac3e32e761f4e089fd6df148c31c4ff" pageSize={8}  headline={"Tesla"}/> */}
    <NewsComp link="https://newsapi.org/v2/top-headlines?country=in&apiKey=0ac3e32e761f4e089fd6df148c31c4ff" pageSize={8}  headline={"India's"}/>
   {/* <NewsComp link="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0ac3e32e761f4e089fd6df148c31c4ff" pageSize={8}  headline={"Business"}/> */}

</div>
    </>
  );
}

export default App;
