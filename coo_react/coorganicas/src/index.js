import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
=======
import App from './Assets/Pages/Home/App';
>>>>>>> 9e7df5aa3279a90bee3034f413a77f2c5d343164
import * as serviceWorker from './serviceWorker';
import {Route,BrowserRouter as Router} from 'react-router-dom';
//importando a página "quem somos"
import QuemSomos from '../src/Assets/Pages/QuemSomos/QuemSomos';

<<<<<<< HEAD

//realizamos a criação de rotas
const Rotas= (
    <Router>
        <div>
           
            <Route exact path ="/QuemSomos" component={QuemSomos}/>
            
           
        </div>
    </Router>
)

// ReactDOM.render(<App />, Rotas, document.getElementById('root'));
=======
import {Route, BrowserRouter as Router} from 'react-router-dom';

import './Assets/css/estilo.css';
import './Assets/css/index.css';
import './Assets/css/receitas.css';


const Rotas = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
        </div>
    </Router>
)
>>>>>>> 9e7df5aa3279a90bee3034f413a77f2c5d343164
ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
