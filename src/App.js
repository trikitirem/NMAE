import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home/home';
import BlogPost from './components/pages/blogpost/blogpost';


function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
