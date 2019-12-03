import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/Home/App';
import QuemSomos from './Pages/QuemSomos/QuemSomos'
import Receitas from './Pages/Receitas/Receitas'
import Login from './Pages/Login/Login'
import Produtos from './Pages/Produtos/Produtos'
import Perfil3 from './Pages/Perfil3/Perfil3'
import * as serviceWorker from './serviceWorker';
import {Route,BrowserRouter as Router , Switch} from 'react-router-dom';

// Importamos o MDB React
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

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
            <Route exact path ="/Produtos" component={Produtos}/>
            <Route exact path ="/Receitas" component={Receitas}/>
            <Route exact path ="/Login" component={Login}/>
            <Route exact path ="/Perfil3" component={Perfil3}/>
            
            </Switch>
            
           
        </div>
    </Router>
)
ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();