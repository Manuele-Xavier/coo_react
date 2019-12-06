import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/Home/App';
import QuemSomos from './Pages/QuemSomos/QuemSomos'
import Receitas from './Pages/Receitas/Receitas'
import Login from './Pages/Login/Login'
import Produtos from './Pages/Produtos/Produtos'
import Perfil from './Pages/Perfil/Perfil'
import Perfil2 from './Pages/Perfil2/Perfil2'
import Perfil3 from './Pages/Perfil3/Perfil3'
import Perfil4 from './Pages/Perfil4/Perfil4'
import PerfilConfig2 from './Pages/PerfilConfig2/PerfilConfig2'
import * as serviceWorker from './serviceWorker';
import {Route,BrowserRouter as Router , Switch} from 'react-router-dom';

// Importamos o MDB React
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import './Assets/css/estilo.css';
import './Assets/css/index.css';
import './Assets/css/receitas.css';

import './Assets/css/toastr.css'






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
            <Route exact path ="/Perfil" component={Perfil}/>
            <Route exact path ="/Perfil2" component={Perfil2}/>
            <Route exact path ="/Perfil3" component={Perfil3}/>
            <Route exact path ="/Perfil4" component={Perfil4}/>
            <Route exact path ="/PerfilConfig2" component={PerfilConfig2}/>
            
            </Switch>
            
           
        </div>
    </Router>
)
ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();