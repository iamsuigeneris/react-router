import React from "react";
import {BrowserRouter as Router,Switch, Route,Link,Redirect} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Email from './components/Email'
import Path from './components/Path'

import "./index.css"

export default function App() {
  const name = 'John Doe'
  const isAuthenticated = true // if the isAuthenticated is true,you'll be able to access the other routes
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to={`/about/${name}`}>About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to={`/email/${name}`}>Email</Link></li>
            <li><Link to={`/path/${name}`}>Path</Link></li>


          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          {
            isAuthenticated ?
            <>
              <Route path="/about/:name" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route path="/email/:name" component={Email} />
              <Route path="/path/:name" component={Path} />

            </>: <Redirect to="/" />
          }
        </Switch>  
      </main>
     </Router>
  );
}

