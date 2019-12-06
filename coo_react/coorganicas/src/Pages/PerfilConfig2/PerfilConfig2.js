import React,{Component} from 'react';
import Axios from 'axios';
// import { bindExpression } from '@babel/types';
import toastr from 'toastr';





toastr.options = {
    "closeButton": true,
    "debug": false,
    "latestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "6000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}



 class PerfilConfig2 extends Component{

    constructor(){
        super()
        this.state={
            putUsuario:{
                usuarioId:3,
                nome:"",
                email:"",
                senha:"",
                ConfirmaSenha : ""
            },

            erroMsg : "",
            successMsg : ""
        }
    }

    componentDidMount(){
        this.PegarUsuario();
    }

    PegarUsuario = () => {
        let config = {
          headers: {
              "Content-Type":"application/json",
              "Access-Control-Allow-Origin":"*" // Cors
          }
        }
        
       Axios.get(`http://localhost:5000/api/Usuario/` + this.state.putUsuario.usuarioId, config)
        .then(response => {        
          this.setState({putUsuario : {
            ...this.state.putUsuario, 
            nome : response.data.nome,
            email : response.data.email,
            senha : response.data.senha,
            ConfirmaSenha : response.data.senha
          }});
          
          console.log("Nome: ", this.state.putUsuario.usuarioId);
        })
        .catch(error => {
          console.log(error);
        });     
    }

    limpaForm = () => {
        // this.setState({
        //     putUsuario:{
        //     usuarioId:4,
        //     nome:"",
        //     email:"",
        //     senha:"",
        //     ConfirmaSenha : ""
        // },
        // })
        this.PegarUsuario();
    }

    putSetState=(input)=>{
        this.setState({
            putUsuario : {
                ...this.state.putUsuario, [input.target.name] : input.target.value
            }
        })
        // console.log(this.state.putUsuario.nome)
        // console.log(this.state.putUsuario.email)
        // console.log(this.state.putUsuario.senha)
        // console.log(this.state.putUsuario.ConfirmaSenha)
        
    }
    // alteraUsuario(event){
    //     event.preventDefault();
    // }


    putUsuario=(event)=>{
        event.preventDefault();
        let usuario_id = 3;
        // let usuario_alterado = this.state.putUsuario
        let usuario = new FormData();

        // Arrumar os states para poder mandar corretamente os dados e ver o que está acontecendo com a view
        usuario.set("usuarioId",3)
        usuario.set("nome",this.state.putUsuario.nome)
        usuario.set("email",this.state.putUsuario.email)
        usuario.set("senha",this.state.putUsuario.senha)
        usuario.set("confirmarSenha",this.state.putUsuario.ConfirmaSenha)

        console.log(this.state.putUsuario.nome)
        console.log(this.state.putUsuario.email)
        console.log(this.state.putUsuario.senha)
        console.log(this.state.putUsuario.ConfirmaSenha)

        fetch('http://localhost:5000/api/Usuario/'+usuario_id,{
            method :"PUT",
            body: usuario
        })
        .then(response=> response.json())
        .then((response) => {
            if(response.erro !== true){
                toastr.success(response.mensagem); //error warning
            }
        })
        .catch(error => {
            console.log("Cath ",error);
            this.setState({erroMsg : "Falha ao alterar o Evento"});
        })

        setTimeout(() => {
            this.setState({successMsg : "Informações alteradas com sucesso"});
            this.setState({erroMsg : "Erro na alteração"});
        }, 3500);
    }

    render(){
        return(
            <div className="container_perfil">
                <form  id="form_cadastro_conf" onSubmit={this.putUsuario} onReset={this.limpaForm}>
              
                                    
                                <h1 className="t_perfil">Editar minhas informações</h1>
                                <label> <span>Nome:</span>
                                    <input type="text" placeholder="Digite o seu nome..." aria-label="Digite o seu nome" name="nome"  value ={this.state.putUsuario.nome } onChange={this.putSetState}></input>
                                </label><br></br>
                                <label> <span>E-mail:</span>
                                    <input type="text" placeholder="Digite o seu e-mail..." aria-label="Digite o seu e-mail" name="email"  value={this.state.putUsuario.email} onChange={this.putSetState}></input>
                                </label><br></br>
                                <label> <span>Senha:</span>
                                    <input type="password" placeholder="Digite a sua senha..." aria-label="Digite a sua senha" name="senha"  value={this.state.putUsuario.senha} onChange={this.putSetState}></input>
                                </label><br></br>
                                <label> <span>Confirmar senha:</span>
                                    <input type="password" placeholder="Confirme a sua senha..." aria-label="Confirme a sua senha" name="ConfirmaSenha"  value={this.state.putUsuario.ConfirmaSenha} onChange={this.putSetState}></input>
                                </label> <br></br>
                                <div className="btns">
                                    <button type="submit" className="btn_" >Salvar</button>
                                    <button type="reset" className="btn_">Cancelar</button>
                                </div>
                        
                           
                </form>

            </div>
        )
    }
}
export default PerfilConfig2;