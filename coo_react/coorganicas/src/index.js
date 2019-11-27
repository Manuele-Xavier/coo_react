import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route,BrowserRouter as Router} from 'react-router-dom';
//importando a página "quem somos"
import QuemSomos from '../src/Assets/Pages/QuemSomos/QuemSomos';


//realizamos a criação de rotas
const Rotas= (
    <Router>
        <div>
           
            <Route exact path ="/QuemSomos" component={QuemSomos}/>
            
           
        </div>
    </Router>
)

// ReactDOM.render(<App />, Rotas, document.getElementById('root'));
ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
