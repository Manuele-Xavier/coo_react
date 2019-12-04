import React, { Component } from 'react';
import {  MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import img_perfil3 from '../../Assets/images/Agrupar 53.png'
import '../../Assets/css/perfil.css'
import '../../Assets/css/estilo.css'
import '../../Assets/css/menuPerfil.css'




class Perfil3 extends Component {
    constructor() {
        super();
        this.state = {
            lista: [],
            modal: false,
            idReserva:"" ,
            modalReserva: {
                dataDaReserva: "",
                quantidadeReserva: "",
                dataDaEspera: "",
                statusDaReserva: "",
                idReserva:"" 
                

            }

        }
    }


    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    mostrarReserva = () => {


        fetch("http://localhost:5000/api/Reserva")
            .then(response => response.json())
            .then(data => {
                this.setState({ lista: data })
                console.log(data)
            })

        //desabilita o icone apos dois segundos



    }

    //delete

    deletarReserva = (reserva) =>{
        let id_Reserva = this.state.modalReserva.idReserva
        this.setState({ erroMsg : "" })
        
        console.log("Excluindo");
        
        fetch("http://localhost:5000/api/Reserva/"+id_Reserva, {
           method : "DELETE",
           headers : { 
               "Content-Type" : "application/json"
           }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            this.mostrarReserva();
            this.setState( () => ({ lista: this.state.lista }));
        })
        
    }


    //delete
    modalPerfil3 = (dataReserva, quantidade, dataEspera, statusReserva, idReserva) => {
        // console.log("algo"+titulo+conteudo)
        this.setState({
            modalReserva: {
                dataReserva:dataReserva,
                quantidade:quantidade,
                dataEspera:dataEspera,
                statusReserva:statusReserva,
                reservaId:idReserva
                
            }

        });
        console.log(this.state.modalReserva)
        this.toggle(4);

    }

   

    componentDidMount() {
        //console.log('Did');
        this.mostrarReserva();
    }

    receitaEstado = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }



    render(){
        return(

            

            <main>
                
            <div className="container_perfil">
            <div className="esquerdo">
                        <nav className="menu_perfil"></nav>
                    </div>
            
                
                
    
                <div className="direito2">
                    <h1 className="t_perfil">Minhas Reservas</h1>
                    <form method="get" id="form_busca" className="formdi_busca">
                        <label>
                            <input type="text" placeholder="Digite o produto..." className="form_buscai"
                                aria-label="buscar produto"/>
                        </label>
                    </form>
                    <form method="GET" id="form_meusprodutos" className="products">
                    {
                    //varrer a lista de evento
                    this.state.lista.map(function (reserva) {
                        console.log(reserva);
                        return (
                            
                            <div className="products2"  onClick={() => this.modalPerfil3(reserva.dataDaReserva, reserva.quantidade, reserva.dataDaEspera, reserva.statusReserva)}  key={reserva.reservaId}>
                            
                            

                            <img src={img_perfil3} className="imgpro" alt="produto"/>
                            <p className="t_products">quantidade de produtos</p>
                            
    
                        </div>
                            

                            //colocamos uma key pois cada linha em jsx precisa de um id unico

                        )
                        //usamos para vincular todo o contesto do map

                    }.bind(this))
                }
                        
                        

                        <div className="btn_perfilespa">
                        <button type="button" className="btn_">adicionar</button>
                        
                    </div>
    
                    </form>


                    
                </div>
    
            </div>

            <MDBContainer>

        <form method="get" id="modalreceitas" >

            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}></MDBModalHeader>
                     <MDBModalBody>
            
            <div>
                    <p>{this.state.modalReserva.dataDaReserva}</p>
                    
                    <p>{this.state.modalReserva.quantidade}</p>
                    
                    <p>{this.state.modalReserva.dataEspera}</p>
                    
                    <p>{this.state.modalReserva.statusReserva}</p>
            </div>
        </MDBModalBody>
        <MDBModalFooter>
            <MDBBtn class="btn_" color="secondary"  onClick={() => this.deletarReserva(this.state.modalReserva.reservaId)} >Deletar</MDBBtn>
            <MDBBtn class="btn_" color="secondary" onClick={this.toggle}>Fechar</MDBBtn>
 
        </MDBModalFooter>
    </MDBModal>
</form>
</MDBContainer>
        </main>
            
        );
    }
}

export default Perfil3;