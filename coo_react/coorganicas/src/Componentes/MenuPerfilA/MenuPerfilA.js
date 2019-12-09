import React, { Component } from 'react';
// import ImgPerfil2 from '../../Img/celeiro (1).svg';
import { Link } from 'react-router-dom';
import img_usuario2 from '../../Assets/images/celeiro (1).svg'
import Sidebar from "react-sidebar";

const mql = window.matchMedia(`(min-width: 800px)`);

class MenuPerfilA extends Component {

    constructor() {
        super();
        this.state = {
            lista: [],
            Nome_Usuario: "",
            
            sidebarOpen: true




        }

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }


    mostrarNome = () => {


        fetch("http://localhost:5000/api/Usuario/")
            .then(response => response.json())
            .then(data => {
                this.setState({ lista: data })
                console.log(data)
            })

        //desabilita o icone apos dois segundos



    }

    componentDidMount() {
        //console.log('Did');
        this.mostrarNome();
    }

    NomeEstado = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            // <div className="container_perfil">
            <Sidebar
                sidebar={
                    <div class="esquerdo">
                    <nav className="menu_perfil">





                        <div>

                            <Link to='#' title="Perfil de configuração do site Coorgânicas" ><img src={img_usuario2}/></Link>  
                            <Link to='#' title="Perfil de configuração do site Coorgânicas" ><p>Nome</p></Link>  
                            <Link to='/Perfil2' title="Meus produtos do site Coorgânicas" ><p>Minhas Ofertas</p></Link>
                            <Link to='/Perfil' title="Cadastrar produtos do site Coorgânicas" ><p>Cadastrar Oferta</p></Link>
                            <Link to='/Perfilconfig2' title="Minhas informações do site Coorgânicas" ><p>Minhas Informações</p></Link>
                            <Link to='/Login' title="Sair do site Coorgânicas" ><p>Sair</p></Link>

                        </div>





                    </nav>
                </div>

                }
                open={this.state.sidebarOpen}
                docked={this.state.sidebarDocked}
                onSetOpen={this.onSetSidebarOpen}
                
            >

                    <i class="fas fa-bars fa-2x" onClick={() => this.onSetSidebarOpen(true)} >
                    
                    </i>
               
            </Sidebar>

            

        )
    }
}
export default MenuPerfilA;
