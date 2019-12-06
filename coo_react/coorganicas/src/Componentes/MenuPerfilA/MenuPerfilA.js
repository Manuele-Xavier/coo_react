import React,{Component} from 'react';
// import ImgPerfil2 from '../../Img/celeiro (1).svg';
import {Link} from 'react-router-dom';
import img_usuario from '../../Assets/images/casinha.png'


class MenuPerfilA extends Component{
    render(){
        return(
            // <div className="container_perfil">
            <div class="esquerdo">
            <nav className="menu_perfil">
                <div>
                
                <Link to='#' title="Perfil de configuração do site Coorgânicas" ><img src={img_usuario}/></Link>  
                <Link to='#' title="Perfil de configuração do site Coorgânicas" ><p>Nome</p></Link>  
                <Link  to='/Perfil2'  title="Meus produtos do site Coorgânicas" ><p>Minhas Ofertas</p></Link>
                <Link to = '/Perfil'title="Cadastrar produtos do site Coorgânicas" ><p>Cadastrar Oferta</p></Link> 
                <Link to='/Perfilconfig2' title="Minhas informações do site Coorgânicas" ><p>Minhas Informações</p></Link>
                <Link to='/Login' title="Sair do site Coorgânicas" ><p>Sair</p></Link>
                </div>
            </nav>
            </div>
            // </div>
        )
    }
}
export default MenuPerfilA;
