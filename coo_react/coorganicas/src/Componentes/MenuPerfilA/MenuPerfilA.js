import React,{Component} from 'react';
// import ImgPerfil2 from '../../Img/celeiro (1).svg';
import {Link} from 'react-router-dom';
import img_usuario from '../../Assets/images/celeiro (1).svg'


class MenuPerfilA extends Component{

    constructor() {
        super();
        this.state = {
            lista: [],
            Nome_Usuario: ""
           

            }

        }

        mostrarNome = () => {


            fetch("http://localhost:5000/api/Usuario")
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
    
    render(){
        return(
            // <div className="container_perfil">
            <div class="esquerdo">
            <nav className="menu_perfil">
                

                {
                    //varrer a lista de evento
                    this.state.lista.map(function (usuario) {
                        console.log(usuario);
                        return (
                            
                            <div key={usuario.usuarioId}>

                            <Link to='#' title="Perfil de configuração do site Coorgânicas" ><img src={img_usuario}/></Link>  
                        <Link to='#' title="Perfil de configuração do site Coorgânicas" ><p>{usuario.nome}</p></Link>  
                            
                            
                            </div>
                            

                            //colocamos uma key pois cada linha em jsx precisa de um id unico

                        )
                        //usamos para vincular todo o contesto do map

                    }.bind(this))
                }
                <div>

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
