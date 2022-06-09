import './App.css';
import FormLogin from './components/FormLogin';

function App() {
  return (
    <main className='main-container'>
      <div className='left-container'>
        <div className='logo-container'>Logo</div>
        <div className='text-content'>
          <h2>Tecnologia com soluções para o agronegócio</h2>
          <p>Facilitamos a aadequação ás legislações referentes
             a rastreabilidade vegetal, garantido a segurança
              dos alimentos.</p>
        </div>
        <div>
          Ícones: facebook, instagram e wtsapp
        </div>
      </div>

      <div className='right-container'>
       <FormLogin />
      </div>
    </main>
  );
}

export default App;
