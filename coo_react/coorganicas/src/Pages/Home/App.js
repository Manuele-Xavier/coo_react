import React from 'react';


import img_home from '../../Assets/images/1.png'
import img_home2 from '../../Assets/images/2.png'
import img_home3 from '../../Assets/images/3.png'
import img_home4 from '../../Assets/images/agri.png'
import img_home5 from '../../Assets/images/banner.jpg'
import img_home6 from '../../Assets/images/receita15.jpg'
import img_home7 from '../../Assets/images/receita16.jpg'
import img_home8 from '../../Assets/images/receita17.jpg'
import Header from '../../Componentes/Header/Header';
import Footer from '../../Componentes/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
      <section id="banner">
        <div className="container column">
            <div className="banner_headline">
                <h1></h1>
                <h2></h2>
            </div>
            <div className="banner_options">
                <div className="banner1">
                    <div className="banner_title">O que é o projeto?</div>
                    <div className="banner_desc">
                        "Somos uma cooperativa sem fins lucrativos que promove
                        o acesso a produtos orgânicos e geração de renda por meio de maneira transparente e sustentável.
                        Conectando mulheres de baixa renda com produtores agrícolas orgânicos."
                    </div>
                    <div className="saiba_mais">
                        <a href="./assets/pages/quemsomos.html">Saiba Mais</a>
                    </div>

                </div>
                {/* <!-- <div className="banner2">
                    <div className="banner_title">Texto</div>
                    <div className="banner_desc">
                        Algum texto qualquer
                    </div>
                    
                </div>
                <div className="banner3">
                    <div className="banner_title">Texto</div>
                    <div className="banner_desc">
                        Algum texto qualquer
                    </div>
                </div> --> */}
            </div>
        </div>
    </section>
    <main>
        <section className="procedencias">
            <div className="container_">
                <div className="procedenciasInt">
                    <div className="icone">
                        <img src={img_home} alt="mão com terra"/>
                    </div>
                    <h2 className="title_procedencia">Procedência</h2>
                    <p>
                        Os nossos alimentos são produzidos livres de fertilizante e agrotóxicos por produtores que se
                        importam com a qualidade e com o impacto ambiental de suas plantações,
                        promovendo uma dieta saudável e equilibrada.
                    </p>
                </div>
                <div className="procedenciasInt">
                    <div className="icone">
                        <img src={img_home2} alt="icone de felicidade"/>
                    </div>
                    <h2 className="title_procedencia">Benefícios</h2>
                    <p>
                        Os alimentos são mais saudáveis, pois são livres de agrotóxicos, hormônios e outros produtos
                        químicos.
                        São mais saborosos, sua produção respeita o meio ambiente, evitando a contaminação de solo, água
                        e vegetação.
                        A produção usa de sistemas de resposanbilidade social.
                    </p>
                </div>
                <div className="procedenciasInt">
                    <div className="icone">
                        <img src={img_home3} alt="icone de interrogação"/>
                    </div>
                    <h2 className="title_procedencia">Mitos</h2>
                    <p>
                        Conforme dito anteriormente, os métodos de plantio naturais e livres de químicas sintéticas não
                        prejudicam o alimento e suas propriedades de qualquer forma.
                        Só por terem sido cultivados com exposições a eventuais pragas,
                        não significa de maneira alguma que você irá consumir alimentos podres ou estragados.
                    </p>
                </div>
            </div>
        </section>
        <section className="conteudo_principal">
            <div className="container_">
                <div className="widget">
                    <div className="widget_title">
                        <div className="widget_title_text">Cooperativa</div>
                        <div className="widget_title_bar"></div>
                    </div>
                    <div className="widget_body flex">
                        <article>
                            <a href="">
                                {/* <!-- <div className="news_data">
                                    <div className="news_posted_at">12 DEC 12</div>
                                    <div className="news_comments">2</div>
                                </div> --> */}
                                <div className="news_thumbnail">
                                    <img src={img_home4}  alt="Imagem de uma mão pegando um fruto da terra"/>
                                       
                                </div>
                                <div className="news_title">
                                    Orgânicos
                                </div>
                                <div className="news_resume">
                                    Procuramos trabalhar com fornecedores, grandes ou pequenos de produtos diversos e
                                    livre de agrotóxicos,
                                    para garantir uma grande e saudável disposição de produtos para nossa comunidade.
                                </div>
                            </a>
                        </article>
                        <article>
                            <a href="">
                                {/* <!-- <div className="news_data">
                                    <div className="news_posted_at">12 DEC 12</div>
                                    <div className="news_comments">2</div>
                                </div> --> */}
                                <div className="news_thumbnail">
                                    <img src={img_home5} alt="Imagem com três marmitas"/>
                                </div>
                                <div className="news_title">
                                    Marmitas
                                </div>
                                <div className="news_resume">
                                    As marmitas são produzidas pelas mulheres da nossa comunidade,
                                    que encontram uma maneira fácil e ágil de se comunicar com os produtores e encontrar
                                    os produtos desejados para a geração de renda.
                                </div>
                            </a>
                        </article>
                    </div>
                </div>
            </div>
        </section>

        <div className="postscontainer">
            <h1 className="tituloposts">Receitas</h1>
            <div className="flexposts">
                <div className="cardcestas posts">
                    <a href="Omelete de Espinafre Queijo e Alho Poro" title="Omelete de Espinafre Queijo e Alho Poro"
                        className="link block">
                        <img src={img_home6} alt="Omelete de Espinafre Queijo e Alho Poro" className="imgcestas"/>
                            
                        <h3 className="titulocestas">Omelete de Espinafre Queijo e Alho Poro</h3>

                    </a>
                </div>

                <div className="cardcestas posts">
                    <a href="Strogonoff de frango" title="Strogonoff de frango" className="link block">
                        <img src={img_home7} alt="Strogonoff de frango" className="imgcestas"/>
                        <h3 className="titulocestas">Strogonoff de frango</h3>

                    </a>
                </div>

                <div className="cardcestas posts">
                    <a href="Sopa de Legumes com Pão Ralado e Salsa" title="Sopa de Legumes com Pão Ralado e Salsa"
                        className="link block">
                        <img src={img_home8} alt="Sopa de Legumes com Pão Ralado e Salsa" className="imgcestas"/>
                            
                        <h3 className="titulocestas">Sopa de Legumes com Pão Ralado e Salsa</h3>

                    </a>
                </div>

            </div>
            <a href="./assets/pages/receita.html" className="btnmercado">Ver todas as receitas</a>
        </div>

    </main>
    <Footer/>
    </div>
  );
}

export default App;
