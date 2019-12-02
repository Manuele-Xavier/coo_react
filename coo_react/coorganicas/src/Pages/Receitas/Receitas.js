import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


import '../../Assets/css/receitas.css'
import img_receitas from '../../Assets/images/receita11.jpg';
// import img_receitas2 from '../../Assets/images/receita3.jpg';
// import img_receitas3 from '../../Assets/images/receita9.jpg';
// import img_receitas4 from '../../Assets/images/receita7.jpg';
// import img_receitas5 from '../../Assets/images/receita10.jpg';
// import img_receitas6 from '../../Assets/images/receita14.jpg';
// import img_receitas7 from '../../Assets/images/receita2.jpg';
// import img_receitas8 from '../../Assets/images/receita19.jpg';
// import img_receitas9 from '../../Assets/images/receita5.jpg';
// import img_receitas10 from '../../Assets/images/receita6.jpg';
// import img_receitas11 from '../../Assets/images/receita12.jpg';
// import img_receitas12 from '../../Assets/images/receita13.jpg';

import Header from '../../Componentes/Header/Header';
import Footer from '../../Componentes/Footer/Footer';
class Receitas extends Component {

    constructor() {
        super();
        this.state = {
            lista: [],
            receita_titulo: "",
            conteudo_receita: "",
            modal: false,
            modalReceita: {
                receita_titulo: "",
                conteudo_receita: "",

            }

        }
    }


    toggle = () => {
        this.setState({
            modal: !this.state.modal
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

    modalDaReceita = (titulo, conteudo) => {
        console.log("algo"+titulo+conteudo)
        this.setState({
            modalReceita: {
                titulo:titulo,
                conteudo:conteudo
            }

        });
        console.log(this.state.modalReceita.titulo)
        this.toggle(4);

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
                

                <Header />
                <h1 className="tituloposts1">Receitas</h1>
                <div className="flexposts">
                {
                    //varrer a lista de evento
                    this.state.lista.map(function (receita) {
                        console.log(receita);
                        return (
                            
                            <div className="cardcestas posts" onClick={() => this.modalDaReceita(receita.titulo, receita.conteudo)} key={receita.receitaId}>

                                
                                    <img src={receita.imagemReceita && require(`../../Assets/images/receitas/${receita.imagemReceita}`)} 
                                        className="imgcestas" />
                                    <h3 className="titulocestas"><p> {receita.titulo}</p></h3>
                                    
                                
                            </div>
                            

                            //colocamos uma key pois cada linha em jsx precisa de um id unico

                        )
                        //usamos para vincular todo o contesto do map

                    }.bind(this))
                }
                </div>








                
                <div className="flexposts">
                    {/* <div className="cardcestas posts" onClick={e => this.modalDaReceita()}>


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
                    </div> */}
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



                <MDBContainer>

                    <form method="get" id="modalreceitas" onSubmit={this.exporReceitas}>

                        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                            <MDBModalHeader toggle={this.toggle}>Receita</MDBModalHeader>
                            <MDBModalBody>
                                <div>
                                        <h1>{this.state.modalReceita.titulo}</h1>
                                        <br/>
                                        <br/>
                                        <p>{this.state.modalReceita.conteudo}</p>
                                </div>
                            </MDBModalBody>
                            <MDBModalFooter>
                                <MDBBtn color="secondary" onClick={this.toggle}>Fechar</MDBBtn>

                            </MDBModalFooter>
                        </MDBModal>
                    </form>
                </MDBContainer>


                <Footer />
            </div>






        );

    }
}

export default Receitas;