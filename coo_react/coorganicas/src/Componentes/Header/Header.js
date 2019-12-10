import React, { Component } from 'react';
import logo from '../../Assets/images/logooriginal.png';
import '../../Assets/css/header.css'

import {Link,withRouter} from 'react-router-dom';
import { usuarioAutenticado, parseJwt } from '../../Services/auth';

class Header extends Component{
    logout =() => {
        localStorage.removeItem("user-coorganicas");
        this.props.history.push("/");
    }
    render(){
        return(
            <header>
            <div className="container_">
                <div className="loog">
                    <Link to='/'><img src={logo} alt="Logo Coorgânicas"
                            className="logooriginal"/>
                </Link>
                </div>
                <div className="menu">
                    <nav>
                        <div className="menuMobile">
                            <div className="mm_line"></div>
                            <div className="mm_line"></div>
                            <div className="mm_line"></div>
                        </div>
                        <ul>
                            <React.Fragment>
                                <Link to='/' title="Home do site Coorganicas">Home</Link>
                            </React.Fragment>
                            <React.Fragment>
                                <Link to='/quemsomos' title="Quem Somos do site Coorganicas" >Quem
                                        Somos</Link>
                            </React.Fragment>
                            <React.Fragment>
                                <Link to='/produtos' title="Produtos do site Coorganicas" >Produtos</Link>
                            </React.Fragment>
                            <React.Fragment>
                                <Link to='/receitas' title="Receitas do site Coorganicas" >Receitas</Link>
                            </React.Fragment>
                            
                            {usuarioAutenticado() && parseJwt().Role === "Administrador" ?(
                                    <>
                                    <Link to='/Perfil5' title="Perfil do Admnistrador" >Perfil
                                     </Link>
                                     <a onClick={this.logout}>Sair</a>
                                     </>
                                ) : (
                                    usuarioAutenticado() && parseJwt().Role === "Agricultor" ?(
                                        <>
                                        <Link to='/Perfil2' title="Perfil do agricultor" >Perfil </Link>
                                        <a onClick={this.logout}>Sair</a>
                                        </>
                                    ) : (
                                    usuarioAutenticado() && parseJwt().Role === "Comunidade" ?(
                                        <>
                                        <Link to='/Perfil4' title="Perfil de comunidade" >Perfil </Link>
                                        <a onClick={this.logout}>Sair</a>
                                        </>
                                    ):(
                                        <>
                                        <Link to='/login' title="Login/Cadastre-se do site Coorganicas" >Login /
                                        Cadastre-se </Link>
                                        </>
                                    )
                                    
                                    )
                                
                            )}    
                                
                            
                            
                        </ul>
                    </nav>
                </div>
                
            
            </div>
           
        </header>
           
        );
    }

}

export default withRouter(Header);