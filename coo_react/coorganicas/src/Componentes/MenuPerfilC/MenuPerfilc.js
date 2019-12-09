import React,{Component} from 'react';

import {Link} from 'react-router-dom';
import img_usuario2 from '../../Assets/images/casinha.png'


class MenuPerfilC extends Component{

    state = {
        state: {
          showNav: false
        }
      }


      openNavClick = e => {
        e.preventDefault()
        this.openNav()
      }
    
      closeNavClick = e => {
        e.preventDefault()
        this.closeNav()
      }
    
      openNav = () => {
        this.setState({
          showNav: true
        })
    
        document.addEventListener("keydown", this.handleEscKey)
      }
      closeNav = () => {
        this.setState({
          showNav: false
        })
    
        document.removeEventListener("keydown", this.handleEscKey)
      }
    
      handleEscKey = e => {
        if (e.key === "Escape") {
          this.closeNav()
        }
      }

    render(){
        return(
            // <div className="container_perfil">
            <div>
                 <span onClick={this.openNavClick} class="open-nav">
                &#9776; open
                </span>
                <div
             onClick={this.navCoverClick}
            
            
            />
           
            <div class="esquerdo">
            <nav className="menu_perfil">
                <div>
                
                <Link to='#' title="Perfil de configuração do site Coorgânicas" ><img src={img_usuario2}/></Link>  
                <Link to='#' title="Perfil de configuração do site Coorgânicas" ><p>Nome</p></Link>  
                <Link  to='/Perfil4'  title="Meus produtos do site Coorgânicas" ><p>Cadastrar Receitas</p></Link>
                <Link to = '/Perfil3'title="Cadastrar produtos do site Coorgânicas" ><p>Minhas Reservas</p></Link> 
                <Link to='/Perfilconfig' title="Minhas informações do site Coorgânicas" ><p>Minhas Informações</p></Link>
                <Link to='/Login' title="Sair do site Coorgânicas" ><p>Sair</p></Link>
                </div>
            </nav>
            </div>
            // </div>
        )
    }
}
export default MenuPerfilC;
