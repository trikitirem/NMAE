import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home/home';
import BlogPost from './components/pages/blogpost/blogpost';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/posts" exact>
            <BlogPost />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
