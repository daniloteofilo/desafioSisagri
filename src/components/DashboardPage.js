import '../App.css';
import { ReactComponent as SisagriLogo } from '../images/sisagri-logo.svg';

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
               <div className='line-separate'></div>
                <a className='list-aside-bar'>Configurações</a>
                <a className='list-aside-bar'>Sair da conta</a>
          </div>
      </main>
    );
  }
  
  export default DashboardPage;
