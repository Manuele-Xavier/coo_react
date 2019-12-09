import React, {Component} from 'react';
import Axios from 'axios';
import toastr from 'toastr';

import '../../Assets/css/estilo.css'
import MenuPerfilA from '../../Componentes/MenuPerfilA/MenuPerfilA';

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
    "timeOut": "12000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

class Perfil extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lista: [],
            descricao: "",
            validade: "",
            produto: "",
            cidade: "",
            regiao: "",
            quantidade: "",
            preco: "",
            loading: false,
            erroMsg: "",
            MsgSuccess: ""
        }
    }

    limpaForm = () =>{
        this.setState({
            descricao: "",
            validade: "",
            produto: "",
            cidade: "",
            regiao: "",
            quantidade: "",
            preco: ""
            
        })
    }

    // POST
    atualizaStateCampo(event) {
        this.setState({[event.target.name]: event.target.value});
    };

    cadastrarProduto(event) {
        
        event.preventDefault();
        console.log("Cadastrando");

        this.setState({ loading: true });

        let produto = {
            produtoId: 1,
            validade: this.state.validade,
            descricao: this.state.descricao,
            produto: this.state.produto,
            cidade: this.state.cidade,
            regiao: this.state.regiao,
            quantidade: this.state.quantidade,
            preco: this.state.preco,

        };

        Axios.post('https://localhost:5001/api/oferta', produto)
            .then(Response => {

                if (Response.status === 200) {
                    toastr.success("Cadastrado com sucesso!");
                    this.setState({
                        cidade: "",
                        regiao: "",
                        validade: "",
                        descricao: "",
                        quantidade: "",
                        preco: "",
                        produto: ""
                    })
                }
            })
            .catch(erro => {
                toastr.error("Falha em cadastrar a Oferta")
                
            });
    }
    
    // POST

    render(){
        return(
            <main>
                <div className="container_perfil">
                    <MenuPerfilA/>
                
                       
                    
                    <form method="POST" id="form_cadastro_produtos" onSubmit={this.cadastrarProduto.bind(this)} onReset={this.limpaForm}>
                        <h1 className="t_perfil">Cadastrar ofertas</h1>
                        <label> <span>Produto</span>
                            <input type="text" aria-label="Digite o Produto" name="produto" value={this.state.produto} required onChange={this.atualizaStateCampo.bind(this)}></input>
                        </label>
                        <label> <span>Cidade</span>
                            <input type="text" aria-label="Digite sua Cidade" name="cidade" value={this.state.cidade} required onChange={this.atualizaStateCampo.bind(this)}></input>
                        </label>
                        <label> <span>Região</span>
                            <input type="e-mail" aria-label="Digite sua Região" name="regiao" value={this.state.regiao} required onChange={this.atualizaStateCampo.bind(this)}></input>
                        </label>
                        <label> <span>Validade </span>
                            <input type="text" aria-label="Digite a sua Validade" name="validade" value={this.state.validade} required onChange={this.atualizaStateCampo.bind(this)}></input>
                        </label>
                        <label> <span>Descrição</span>
                            <input type="text" aria-label="Digite a descrição do produto" name="descricao" value={this.state.descricao} required onChange={this.atualizaStateCampo.bind(this)}></input>
                        </label>
                        <label> <span>Quantidade</span>
                            <input type="text" aria-label="Digite a Quantidade" name="quantidade" value={this.state.quantidade} required onChange={this.atualizaStateCampo.bind(this)}></input>
                        </label>
                        <label> <span>Preço por Kg</span>
                            <input type="text" aria-label="Digite o Preco" name="preco" value={this.state.preco} required onChange={this.atualizaStateCampo.bind(this)}></input>
                        </label>
                        <div className="btns">
                            <button type="submit" class="btn_">Adicionar</button>
                            <button type="reset" class="btn_">Cancelar</button>
                        </div>
                    </form>
                </div>
            </main>            
        );
    }
}

export default Perfil;
