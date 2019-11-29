import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Assets/Pages/Home/App';
import QuemSomos from './Assets/Pages/QuemSomos/QuemSomos'
import Receitas from './Assets/Pages/Receitas/Receitas'
import * as serviceWorker from './serviceWorker';
import {Route,BrowserRouter as Router , Switch} from 'react-router-dom';


import './Assets/css/estilo.css';
import './Assets/css/index.css';
import './Assets/css/receitas.css';



//realizamos a criação de rotas
const Rotas= (
    <Router>
        <div>
            <Switch>
            
            <Route exact path ="/" component={App}/>
            <Route exact path ="/QuemSomos" component={QuemSomos}/>
            <Route exact path ="/Receitas" component={Receitas}/>
            </Switch>
            
           
        </div>
    </Router>
)
ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();