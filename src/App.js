import logo from './logo.svg';
import './App.css';
import './Sass/Main.scss'
import './css/all.css'
import MainPage from './Components/MainPage'; 
function App() {
  console.log("APP Render");
  console.log("Inner Tidth : "+  window.innerWidth);
  return (
    
   <MainPage/>
  );
}

export default App;
