import React, { Component } from 'react';

import '../../Assets/css/estilo.css';
import '../../Assets/css/login.css';
import Header from '../../Componentes/Header/Header';
import Footer from '../../Componentes/Footer/Footer';


////fazendo a componentização da página Login- Julia
// import '../../css/login.css'

class Login extends Component {
    
    constructor(){
        super();
        this.state = {
            RazaoSocial: '',
            Email: '',
            Senha: '',
            ConfirmarSenha : "",
            Cidade: '',
            Endereco: '',  
            Numero: '',
            Telefone: '',
            Cnpj: '',
            perfil : ""

        };
    };

    // POST !
    CadastrarCooperativa = (event) => {
        event.preventDefault();
        this.setState({ isLoading: true});

         // Declara um objeto do tipo FormData, já que o Backend recebe este tipo.
         let usuario = new FormData();

        //  alert(
        //     `Selected file - ${
        //     this.state.fileInput.current.files[0].name
        //     }`
        // );

         // Define um evento que recebe os dados do state
        // É necessário converter o acessoLivre para int, para que o back-end consiga converter para bool ao cadastrar
        // Como o navegador envia o dado como string, não é possível converter para bool implicitamente

       
            usuario.set("nome",this.state.RazaoSocial);
            usuario.set("email", this.state.Email);
            usuario.set("senha", this.state.Senha);
            usuario.set("cidade", this.state.Cidade);
            usuario.set("endereco", this.state.Endereco); 
            usuario.set("numero", this.state.Numero);
            usuario.set("telefone",this.state.Telefone);
            usuario.set("cnpj",this.state.Cnpj);
            usuario.set("confirmarSenha", this.state.ConfirmarSenha); // Incluir na view do back confirmarsenha
            usuario.set("cep", "02435000");
            usuario.set("tipoUsuarioId", this.state.perfil);
        

       
        // Define a URL e o corpo da requisição
        fetch('http://localhost:5000/api/usuario', {
            method: "POST",
            body: usuario,
        })
        .then(response => response.json())
        .then(response => {
            // Caso retorne status code 200,
            if (response.status === 200) {
                // exibe no console do navegador a mensagem 'Evento cadastrado!'
                console.log('Evento cadastrado!');
                // e define que a requisição terminou
                this.setState({ isLoading : false });
            };
        })
        .catch(error => console.log('Não foi possível cadastrar:' + error))


     

    };
          
      
    AtualizaEstado = (input) => {
        console.log("Atuzalindo: ", [input.target.name])

        this.setState({ [input.target.name] : input.target.value})
         //mostrando as atualizções 
        console.log(this.state.Cnpj)
        console.log(this.state.perfil) 
        console.log(this.state.RazaoSocial)
        console.log(this.state.Email)
        console.log(this.state.Senha)  
        console.log(this.state.Cidade)
        console.log(this.state.Endereco)
        console.log(this.state.Numero)
    }
     
      
 

 
    render() {
        return (
              
          <div>
              <Header/>
            <main className="banner_login">
                
                <div className="cotaniner_login">
                    <div className="espaco_entrar">
                        <form method="GET" id="form_usuario" className="entrar_login">
                            <label>
                                <input type="text" placeholder="Usuario:" aria-label="Digitar o Usuario" name="Usuario"
                                    required></input>
                                <input type="text" placeholder="Senha:" aria-label="Digitar a Senha" name="Usuario" required></input>
                                <button type="submit" className="btn_">Entrar</button>
                                <p className="t_login">Não possui cadastro? Inscreva-se</p>

                            </label>

                        </form>

                    </div>
                    <form  onSubmit= {this.CadastrarCooperativa}method="GET" id="form_cadastro" className="cadastro_login">
                       
                        <div className="espaco">
                            <div className="radius">
                                {/*os values estão com valores determinados pelo banco de dados */ }
                                <input type="radio" name="perfil" className="btn__cadastro" value={3} onChange={this.AtualizaEstado}/>Agricultor
                                <input type="radio" name="perfil" className="btn__cadastro" value={2} onChange={this.AtualizaEstado}/>Comunidade
                            </div>
                        </div>

                        <label> <span>Razão Social</span>
                            <input type="text" placeholder="Digite o seu nome" aria-label="Digitar o  seu nome " name="RazaoSocial" 
                                required className="in_login" onChange={this.AtualizaEstado}></input> {/*precisa colocar o " onChange={this.AtualizaEstado} {/*os names precisam estar iguais as declarações do constructor*/}
                        </label>

                    
                        <label> <span>E-mail:</span>
                            <input type="text" placeholder="Digite o seu e-mail" aria-label="Digitar o seu e-mail" name="Email"
                                required className="in_login" onChange={this.AtualizaEstado}></input>
                        </label>
                        <label> <span>Confirmar e-mail:</span>
                            <input type="text" placeholder="Confirme o seu e-mail" aria-label="Digitar o seu e-mail"
                                name="Email" required className="in_login" className="in_login" onChange={this.AtualizaEstado}></input>

                        </label>
                        <label> <span>Senha:</span>
                            <input type="text" placeholder=" Digite a senha" aria-label="Digitar a senha" name="Senha" required
                                className="in_login" onChange={this.AtualizaEstado}></input>
                        </label>

                        <label> <span>Confirmar senha:</span>

                            <input type="text" placeholder="Confirmar senha" aria-label="Confirmar a senha"
                                name="ConfirmarSenha" required className="in_login" onChange={this.AtualizaEstado}></input>
                        </label>
                        <label> <span>Cidade:</span>
                            <input type="text" placeholder="Digite a cidade" aria-label="Digitar a cidade" name="Cidade"
                                required className="in_login"  onChange={this.AtualizaEstado}></input>

                        </label>
                        <label> <span>Endereço:</span>
                            <input type="text" placeholder="Digite o endereço" aria-label="Digite o endereço" name="Endereco"
                                required className="in_logine"  onChange={this.AtualizaEstado}></input>

                            <label> <span className="c">Nº:</span>

                                <input type="text" placeholder="" aria-label="Digite o numero" name="Numero"
                                    required className="in_loginn" onChange={this.AtualizaEstado}></input>

                            </label>

                        </label>
                        <label> <span>CEP:</span>
                            <input type="text" placeholder="Digite o telefone" aria-label="Digite o telefone" name="Telefone"
                                required className="in_login"  onChange={this.AtualizaEstado}></input>
                        </label>
                        <label> <span>Telefone:</span>
                            <input type="text" placeholder="Digite o telefone" aria-label="Digite o telefone" name="Telefone"
                                required className="in_login"  onChange={this.AtualizaEstado}></input>
                        </label>
                        <label className="espaco_span"> <span>CNPJ:</span>

                            <input type="text" placeholder="Digite o CNPJ" aria-label="Digitar CNPJ" name="Cnpj" required
                                className="in_login"  onChange={this.AtualizaEstado}></input>
                        </label>
                        <button type="submit" className="btn_">Cadastrar</button>


                    </form>
                </div>
                <Footer/>
            </main>
            </div>
           

        )
    }
}

export default Login;
