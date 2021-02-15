import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home/home';
import BlogPost from './components/pages/blogpost/blogpost';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/post" exact component={BlogPost} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
