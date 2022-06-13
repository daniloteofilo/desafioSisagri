import '../App.css';
import { Chart } from "react-google-charts";

import { ReactComponent as SisagriLogo } from '../images/sisagri-logo.svg';
import { ReactComponent as FacebookLogo } from '../images/facebook-logo-dashboard.svg';
import { ReactComponent as InstagramLogo } from '../images/instagram-logo-dashboard.svg';
import { ReactComponent as WhatsappLogo } from '../images/whatsapp-logo-dashboard.svg';

const data = [
    ["Meses", "Aplicações", "Produções"],
    ["", 25, 19],
    ["Dez", 25, 24],
    ["", 40, 23],
    ["Jan", 20, 26],
    ["", 30, 20],
    ["Fev", 20, 15],
    ["", 29, 29],
    ["Mar", 10, 22],
    ["", 52, 24],
    ["Abr", 9, 13],
    ["", 25, 30],
    ["Mai", 31, 24],
    ["", 10, 31],
    ["Jun", 29, 25],
    ["", 26, 50],

];
  
const options = {
    title: "Resumo",
    curveType: "function",
    legend: { position: "top-right" },
};

function DashboardPage() {
    return (
      <main className='dashboard-container'>
            <div className='aside-bar'>
                <div className='logo-aside-bar'>
                    <SisagriLogo />
                </div>
                <div>
                    <p>Lagos Agropecuaria LTDA</p>
                    <span>12.345.678/0001-23</span>
                </div>
                <a className='list-aside-bar'>Painel de controle</a>
                <a className='list-aside-bar'>Propriedades</a>
                <a className='list-aside-bar'>Cultivos</a>
                <a className='list-aside-bar'>Serviços</a>
                <a className='list-aside-bar'>Insumos</a>
                <a className='list-aside-bar'>Clientes</a>
                <a className='list-aside-bar'>Safras</a>
                <a className='list-aside-bar'>Aplicações</a>
                <a className='list-aside-bar'>Vendas</a>
                <a className='list-aside-bar'>Perdas</a>
                <a className='list-aside-bar'>Movimentos</a>
                <a className='list-aside-bar'>Relatórios</a>
                <a className='list-aside-bar'>Estoque</a>
                <div className='line-separate'>
                </div>
                <a className='list-aside-bar'>Configurações</a>
                <a className='list-aside-bar'>Sair da conta</a>
            </div>

            <div className='mid-container'>
                <div className='top-mid-bar'>
                    <p className='hello'>Olá</p>
                    <input type='search' className='search-bar' placeholder='Faça uma pesquisa'/>
                </div>
                <div className='graphic-content'>
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={data}
                        options={options}
                    />
                </div>
                
                <div className='bottom-mid-container'>
                    <div className='information-board'>
                        <p className='title-information-board'>Talhões</p>
                        <span className='underline-title-information-board'>
                            Mais utilizados
                        </span>
                        <div className='itens-information-board-container'>
                            <div className='icon-itens-information-board'>
                                
                            </div>
                            <div>
                                <h4 className='first-line-itens-information-board'>
                                    Abrigo
                                </h4>
                            </div>
                        </div>
                        <div className='itens-information-board-container'>
                            <div className='icon-itens-information-board'>
                                
                            </div>
                            <div>
                                <h4 className='first-line-itens-information-board'>
                                    Campo verde
                                </h4>
                            </div>
                        </div>
                        <div className='itens-information-board-container'>
                            <div className='icon-itens-information-board'>
                                
                            </div>
                            <div>
                                <h4 className='first-line-itens-information-board'>
                                    Abrigo
                                </h4>
                            </div>
                        </div>
                        <div className='see-all-container'>
                            <a href='#' className='see-all'>Ver todos &gt;</a>
                        </div>
                    </div>
                
                    <div className='information-board'>
                        <p className='title-information-board'>Safras</p>
                        <span className='underline-title-information-board'>
                            Acessados recentemente
                        </span>
                        <div className='itens-information-board-container'>
                            <div className='icon-itens-information-board'>
                                
                            </div>
                            <div>
                                <h4 className='first-line-itens-information-board'>
                                    Abrigo - Uva Vitoria
                                </h4>
                                <p className='second-line-itens-information-board'>
                                    Área 1.2ha - Plantio: 20/04/2022
                                </p>
                            </div>
                        </div>
                        <div className='itens-information-board-container'>
                            <div className='icon-itens-information-board'>
                                
                            </div>
                            <div>
                                <h4 className='first-line-itens-information-board'>
                                    Abrigo - Uva Vitoria
                                </h4>
                                <p className='second-line-itens-information-board'>
                                    Área 1.2ha - Plantio: 20/04/2022
                                </p>
                            </div>
                        </div>
                        <div className='itens-information-board-container'>
                            <div className='icon-itens-information-board'>
                                
                            </div>
                            <div>
                                <h4 className='first-line-itens-information-board'>
                                    Abrigo - Uva Vitoria
                                </h4>
                                <p className='second-line-itens-information-board'>
                                    Área 1.2ha - Plantio: 20/04/2022
                                </p>
                            </div>
                        </div>
                        <div className='see-all-container'>
                            <a href='#' className='see-all'>Ver todos &gt;</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-side-container'>
                <div className='social-networks-dashboard'>
                    <a href='https://www.facebook.com/Sisagri' target='_blank'>
                        <FacebookLogo className='logo-social-networks-dashboard'/>
                    </a>
                    <a href='https://www.instagram.com/sisagri/' target='_blank'>
                        <InstagramLogo className='logo-social-networks-dashboard'/>
                        </a>
                    <a href='https://api.whatsapp.com/send/?phone=558581771559&text&app_absent=0' target='_blank'>
                        <WhatsappLogo className='logo-social-networks-dashboard'/>
                    </a>
                </div>
                <div className='information-board'>
                        <p className='title-information-board title-recent-activities'>Atividade Recentes</p>
                        <div className='itens-information-board-container'>
                            <div className='icon-itens-information-board'>
                                
                            </div>
                            <div>
                                <h4 className='first-line-itens-information-board'>
                                    Abrigo - Uva Vitoria
                                </h4>
                                <p className='second-line-itens-information-board'>
                                    07/12/2022 - Capina Manual
                                </p>
                                <p className='third-line-itens-information-board'>
                                    2h x 8,00 = R$ = 16,00
                                </p>
                            </div>
                        </div>
                        <div className='itens-information-board-container'>
                            <div className='icon-itens-information-board'>
                                
                            </div>
                            <div>
                                <h4 className='first-line-itens-information-board'>
                                    Uva - isis 
                                </h4>
                                <p className='second-line-itens-information-board'>
                                    21/03/2022 - 1.90.20220321
                                </p>
                                <p className='third-line-itens-information-board'>
                                    Quantidade = 75
                                </p>
                            </div>
                        </div>
                        <div className='itens-information-board-container'>
                            <div className='icon-itens-information-board'>
                                
                            </div>
                            <div>
                                <h4 className='first-line-itens-information-board'>
                                    Abrigo - Uva Vitoria
                                </h4>
                                <p className='second-line-itens-information-board'>
                                    07/12/2022 - Capina Manual
                                </p>
                                <p className='third-line-itens-information-board'>
                                    2h x 8,00 = R$ = 16,00
                                </p>
                            </div>
                        </div>
                        <div className='itens-information-board-container'>
                            <div className='icon-itens-information-board'>
                                
                            </div>
                            <div>
                                <h4 className='first-line-itens-information-board'>
                                    Uva - isis 
                                </h4>
                                <p className='second-line-itens-information-board'>
                                    21/03/2022 - 1.90.20220321
                                </p>
                                <p className='third-line-itens-information-board'>
                                    Quantidade = 75
                                </p>
                            </div>
                        </div>
                        <div className='itens-information-board-container'>
                            <div className='icon-itens-information-board'>
                                
                            </div>
                            <div>
                                <h4 className='first-line-itens-information-board'>
                                    Abrigo - Uva Vitoria
                                </h4>
                                <p className='second-line-itens-information-board'>
                                    07/12/2022 - Capina Manual
                                </p>
                                <p className='third-line-itens-information-board'>
                                    2h x 8,00 = R$ = 16,00
                                </p>
                            </div>
                        </div>
                        <div className='itens-information-board-container'>
                            <div className='icon-itens-information-board'>
                                
                            </div>
                            <div>
                                <h4 className='first-line-itens-information-board'>
                                    Uva - isis 
                                </h4>
                                <p className='second-line-itens-information-board'>
                                    21/03/2022 - 1.90.20220321
                                </p>
                                <p className='third-line-itens-information-board'>
                                    Quantidade = 75
                                </p>
                            </div>
                        </div>
                        <div className='itens-information-board-container'>
                            <div className='icon-itens-information-board'>
                                
                            </div>
                            <div>
                                <h4 className='first-line-itens-information-board'>
                                    Abrigo - Uva Vitoria
                                </h4>
                                <p className='second-line-itens-information-board'>
                                    07/12/2022 - Capina Manual
                                </p>
                                <p className='third-line-itens-information-board'>
                                    2h x 8,00 = R$ = 16,00
                                </p>
                            </div>
                        </div>
                        <div className='itens-information-board-container'>
                            <div className='icon-itens-information-board'>
                                
                            </div>
                            <div>
                                <h4 className='first-line-itens-information-board'>
                                    Uva - isis 
                                </h4>
                                <p className='second-line-itens-information-board'>
                                    21/03/2022 - 1.90.20220321
                                </p>
                                <p className='third-line-itens-information-board'>
                                    Quantidade = 75
                                </p>
                            </div>
                        </div>
                        
                        <div className='see-all-container'>
                            <a href='#' className='see-all'>Ver todos &gt;</a>
                        </div>
                </div>
            </div>
      </main>
    );
  }
  
  export default DashboardPage;
