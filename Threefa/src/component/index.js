import React from 'react';
import{BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Company from './Company';
import Create from './CreateAccount';
import Login from './Login';
export default() =>
(<BrowserRouter>
 <Switch>
 <Route path="/" exact component={Home} />
 <Route path="/Company" exact component = {Company}/>
 <Route path="/Create" exact component ={Create}/>
 <Route path="/login" exact component={Login} />

 </Switch>
 
 </BrowserRouter>);
       
    
    

