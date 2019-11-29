import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


import '../../css/receitas.css';
import img_receitas from '../../images/receita11.jpg';
import img_receitas2 from '../../images/receita3.jpg';
import img_receitas3 from '../../images/receita9.jpg';
import img_receitas4 from '../../images/receita7.jpg';
import img_receitas5 from '../../images/receita10.jpg';
import img_receitas6 from '../../images/receita14.jpg';
import img_receitas7 from '../../images/receita2.jpg';
import img_receitas8 from '../../images/receita19.jpg';
import img_receitas9 from '../../images/receita5.jpg';
import img_receitas10 from '../../images/receita6.jpg';
import img_receitas11 from '../../images/receita12.jpg';
import img_receitas12 from '../../images/receita13.jpg';
class Receitas extends Component {

    constructor() {
        super();
        this.state = {
            lista: [],
            receita: "",
            conteudo_receita: "",
            loading: false,
            modal4: false,
            modalReceita:{
            receita: "",
            conteudo_receita: "",
            }

        }
    }

    toggle = nr => () => {
        let modal4 = 'modal' + nr
        this.setState({
            [modal4]: !this.state[modal4]
        });
    }





    //#region GETs
    mostrarReceita = () => {


        fetch("http://localhost:5000/api/Receita")
            .then(response => response.json())
            .then(data => {
                this.setState({ lista: data })
                console.log(data)
            })

        //desabilita o icone apos dois segundos



    }
    alterarEvento = (evento) => {
        console.log(evento)
    
        this.setState({
          modalReceita: {
          
          }
        });

    }


    componentDidMount() {
        //console.log('Did');
        this.mostrarReceita();
    }

    receitaEstado = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }



    render() {
        return (


            <div className="postscontainer">
                {
                    //varrer a lista de evento
                    this.state.lista.map(function (receita) {
                        return (

                            <div key={receita.receitaId} >
                                <p> {receita.titulo}</p>
                                <p> {receita.conteudo}</p>
                            </div>
                            //colocamos uma key pois cada linha em jsx precisa de um id unico

                        )
                        //usamos para vincular todo o contesto do map

                    }.bind(this))
                }
                <form method="get" id="modalreceitas" onSubmit={this.exporReceitas}>

                    <label>
                        <input type="text" value={this.state.titulo}
                            onChange={this.atualizaEstado} name="titulo"
                        />
                    </label>
                    <label>
                        <input type="text" value={this.state.conteudo}
                            onChange={this.atualizaEstado} name="conteudo"
                        />
                    </label>
                </form>

                <MDBContainer>

                    <MDBBtn color="primary" onClick={this.toggle(4)}>Large modal</MDBBtn>
                    <MDBModal isOpen={this.state.modal4} toggle={this.toggle(4)} size="lg">
                        <MDBModalHeader toggle={this.toggle(4)}>MDBModal title</MDBModalHeader>
                        <MDBModalBody>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                            </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={this.toggle(4)}>Close</MDBBtn>
                            <MDBBtn color="primary">Save changes</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                </MDBContainer>

                <h1 className="tituloposts1">Receitas</h1>
                <div className="flexposts">
                    <div className="cardcestas posts" >
                        <a href="Ravioli com Queijo de Cabra Brócolis e Ervas"
                            title="Ravioli com Queijo de Cabra Brócolis e Ervas" className="link block">
                            <img src={img_receitas} alt="Ravioli com Queijo de Cabra Brócolis e Ervas"
                                className="imgcestas" />
                            <h3 className="titulocestas">Ravioli com queijo de cabra, brócolis e ervas</h3>
                        </a>
                        <button onClick={e => this.mostrarReceita()}>>sdsdsd</button>
                    </div>

                    <div className="cardcestas posts">
                        <a href="Gravata de Massa Italiana com Pesto de Manjericão Caseiro"
                            title="Gravata de Massa Italiana com Pesto de Manjericão Caseiro" className="link block">
                            <img src={img_receitas2} alt="Gravata de Massa Italiana com Pesto de Manjericão Caseiro"
                                className="imgcestas" />
                            <h3 className="titulocestas">Massa italiana com pesto de manjericão caseiro</h3>
                        </a>
                    </div>
                    <div className="cardcestas posts">
                        <a href="Sopa de Galinha com Ervilhas Cenouras e Batatas"
                            title="Sopa de Galinha com Ervilhas Cenouras e Batatas" className="link block">
                            <img src={img_receitas3} alt="Sopa de Galinha com Ervilhas Cenouras e Batatas"
                                className="imgcestas" />
                            <h3 className="titulocestas">Sopa de galinha com ervilhas, cenouras e batatas</h3>
                        </a>
                    </div>
                    <div className="cardcestas posts">
                        <a href="Arroz com Ervilhas Verdes Camarões e Rúcula"
                            title="Arroz com Ervilhas Verdes Camarões e Rúcula" className="link block">
                            <img src={img_receitas4} alt="Arroz com Ervilhas Verdes Camarões e Rúcula"
                                className="imgcestas" />
                            <h3 className="titulocestas">Arroz com ervilhas verdes, camarões e rúcula</h3>
                        </a>
                    </div>
                    <div className="cardcestas posts">
                        <a href="Sopa de Abóbora" title="Sopa de Abóbora" className="link block">
                            <img src={img_receitas5} alt="Sopa de Abóbora" className="imgcestas" />
                            <h3 className="titulocestas">Sopa de abóbora</h3>
                        </a>
                    </div>
                    <div className="cardcestas posts">
                        <a href="Panqueca de Banana" title="Panqueca de Banana" className="link block">
                            <img src={img_receitas6} alt="Panqueca de Banana" className="imgcestas" />
                            <h3 className="titulocestas">Panqueca de banana</h3>
                        </a>
                    </div>
                    <div className="cardcestas posts">
                        <a href="Salada de Frango com Legumes e Azeitonas" title="Salada de Frango com Legumes e Azeitonas"
                            className="link block">
                            <img src={img_receitas7} alt="Salada de Frango com Legumes e Azeitonas" className="imgcestas" />
                            <h3 className="titulocestas">Salada de frango com legumes e azeitonas</h3>
                        </a>
                    </div>
                    <div className="cardcestas posts">
                        <a href="Macarrão de Abóbora Alfredo Fettucine" title="Macarrão de Abóbora Alfredo Fettucine"
                            className="link block">
                            <img src={img_receitas8} alt="Macarrão de Abóbora Alfredo Fettucine" className="imgcestas" />
                            <h3 className="titulocestas">Macarrão de abóbora alfredo fettucine</h3>
                        </a>
                    </div>
                    <div className="cardcestas posts">
                        <a href="Bolo de Maçã com Canela" title="Bolo de Maçã com Canela" className="link block">
                            <img src={img_receitas9} alt="Bolo de Maçã com Canela" className="imgcestas" />
                            <h3 className="titulocestas">Bolo de maçã com canela</h3>
                        </a>
                    </div>
                    <div className="cardcestas posts">
                        <a href="Sanduiche com Legumes Presunto e Queijo" title="Sanduiche com Legumes Presunto e Queijo"
                            className="link block">
                            <img src={img_receitas10} alt="Sanduiche com Legumes Presunto e Queijo" className="imgcestas" />
                            <h3 className="titulocestas">Sanduíche de presunto e queijo com legumes</h3>
                        </a>
                    </div>
                    <div className="cardcestas posts">
                        <a href="Frango Assado com Laranjas e Ervas" title="Frango Assado com Laranjas e Ervas"
                            className="link block">
                            <img src={img_receitas11} alt="Frango Assado com Laranjas e Ervas" className="imgcestas" />
                            <h3 className="titulocestas">Frango assado com laranjas e ervas</h3>
                        </a>
                    </div>
                    <div className="cardcestas posts">
                        <a href="Mexilhão Frito" title="Mexilhão Frito" className="link block">
                            <img src={img_receitas12} alt="Mexilhão Frito" className="imgcestas" />
                            <h3 className="titulocestas">Mexilhão frito</h3>
                        </a>
                    </div>
                    <div className="espacamento_pag">

                        <ul className="paginacao">
                            <a href="#">
                                <li>Anterior</li>
                            </a>
                            <a href="#">
                                <li>1</li>
                            </a>
                            <a href="#">
                                <li>2</li>
                            </a>
                            <a href="#">
                                <li>Próxima</li>
                            </a>
                        </ul>
                    </div>
                </div>

                <div>

                </div>



            </div>






        );

    }
}

export default Receitas;