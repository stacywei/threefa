import React from 'react';
import{BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Company from './Company';
import Create from './CreateAccount';
import Login from './Login';
import Join from './Join';
import startform from './Startform';
import Faq from './FAQ';
import About from './About';
export default() =>
(<BrowserRouter>
 <Switch>
 <Route path="/" exact component={Home} />
 <Route path="/Company" exact component = {Company}/>
 <Route path="/signup" exact component ={Create}/>
 <Route path="/login" exact component={Login} />
 <Route path="/join" exact component ={Join}/>
 <Route path="/startform" exact component={startform} />
 <Route path="/FAQ" exact component ={Faq}/>
 <Route path="/About" exact component ={About}/>

 </Switch>
 
 </BrowserRouter>);
       
    
    

