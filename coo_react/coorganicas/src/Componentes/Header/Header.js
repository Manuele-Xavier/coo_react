import React, { Component } from 'react';
import logo from '../../Assets/images/logooriginal.png';
import '../../Assets/css/header.css'

import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <header>
            <div className="container">
                <div className="logo">
                    <Link to='/'><img src={logo} alt="Logo Coorgânicas"
                            className="logooriginal"/>
                </Link>
                <div className="menu">
                    <nav>
                        <div className="menuMobile">
                            <div className="mm_line"></div>
                            <div className="mm_line"></div>
                            <div className="mm_line"></div>
                        </div>
                        <ul>
                            <Link to='/' title="Home do site Coorganicas" href="#">Home</Link>
                            <Link to='/quemsomos' title="Quem Somos do site Coorganicas" href="./assets/pages/quemsomos.html">Quem
                                    Somos</Link>
                            <Link to='/produtos' title="Produtos do site Coorganicas" href="./assets/pages/produtos.html">Produtos</Link>
                            
                            <Link to='/receitas' title="Receitas do site Coorganicas" href="./assets/pages/receita.html">Receitas</Link>
                            
                            
                           
                            <Link to='/login' title="Login/Cadastre-se do site Coorganicas" href="./assets/pages/login.html">Login /
                                    Cadastre-se </Link>
                        </ul>
                    </nav>
                </div>
                
            </div>
            </div>
           
        </header>
           
        );
    }

}

export default Header;