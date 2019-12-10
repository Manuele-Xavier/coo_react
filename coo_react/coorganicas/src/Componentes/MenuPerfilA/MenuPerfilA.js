import React,{Component} from 'react';
// import ImgPerfil2 from '../../Img/celeiro (1).svg';
import {Link} from 'react-router-dom';
import img_usuario from '../../Assets/images/celeiro (1).svg'
import { parseJwt } from '../../Services/auth';



class MenuPerfilA extends Component{

    constructor() {
        super();
        this.state = {
            lista: [],
            user:{
                Nome_Usuario: "",
                imagemUsuario:""
            }
            
            }

        }

        mostrarNome = () => {
            let config = {
                headers: {
                    "Content-Type":"application/json",
                    "Access-Control-Allow-Origin":"*" // Cors
                }
              }

            var id=parseJwt().Id
            console.log(id)

            fetch("http://localhost:5000/api/Usuario/"+id,config)
                .then(response => response.json())
                .then(data => {
                    this.setState({user:{
                        ...this.state.user,
                        Nome_Usuario : data.nome,
                        imagemUsuario : data.imagemUsuario
                    }})
                    console.log(this.state.user.Nome_Usuario)
                    console.log(this.state.user.imagemUsuario)
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
            <div className="esquerdo">
            <nav className="menu_perfil">
                

                {
                    //varrer a lista de evento
                         <>
                            <Link to='#' title="Perfil de configuração do site Coorgânicas" ><img src={this.state.user.imagemUsuario && require(`../../Assets/images/Perfil/${this.state.user.imagemUsuario}`)}/></Link>  
                            <Link to='#' title="Perfil de configuração do site Coorgânicas" ><p>{this.state.user.Nome_Usuario}</p></Link>  
                        </>
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