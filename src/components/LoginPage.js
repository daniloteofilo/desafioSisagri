import '../App.css';
import FormLogin from './FormLogin.js';
import { ReactComponent as SisagriLogo } from '../images/sisagri-logo.svg';
import { ReactComponent as FacebookLogo } from '../images/facebook-logo.svg';
import { ReactComponent as InstagramLogo } from '../images/instagram-logo.svg';
import { ReactComponent as WhatsappLogo } from '../images/whatsapp-logo.svg';



function LoginPage() {
  return (
    <main className='main-container'>
      <div className='left-container'>
        <div className='logo-container'>
            <SisagriLogo />
        </div>
        <div className='text-content'>
          <h2 className='title-text-content'>Tecnologia com soluções para o agronegócio</h2>
          <p className='paragraph-text-content'>Facilitamos a adequação ás legislações referentes
             a rastreabilidade vegetal, garantindo a segurança
              dos alimentos.</p>
        </div>
        <div className='social-networks'>
          <a className='logo-social-networks' href='https://www.facebook.com/Sisagri' target='_blank'><FacebookLogo/></a>
          <a className='logo-social-networks' href='https://www.instagram.com/sisagri/' target='_blank'><InstagramLogo/></a>
          <a className='logo-social-networks' href='https://api.whatsapp.com/send/?phone=558581771559&text&app_absent=0' target='_blank'><WhatsappLogo/></a>

        </div>
      </div>

      <div className='right-container'>
       <FormLogin />
      </div>
    </main>
  );
}

export default LoginPage;
