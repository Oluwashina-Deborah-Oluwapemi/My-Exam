
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  
  return (
    <Router>
       <div className="App">
      <Navbar />
      <div className="content">
       <Switch>
        <Route exact path= "/"> 
          <Home />
        </Route>
        <Route path= "/login"> 
          <Login />
        </Route>
        <Route path= "/about"> 
          <About />
        </Route>
        <Route path= "/blogs/:id"> 
          <BlogDetails />
        </Route>
        <Route path="*"> 
          <NotFound />
        </Route>
       </Switch>
       
      </div>
    </div>
    </Router>
   
  );
}

export default App;
