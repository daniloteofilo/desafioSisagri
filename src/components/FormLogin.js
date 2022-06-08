import './FormLogin.css'

function FormLogin () {
    return (
        <form className='form-login'>
          <h3>Acesse sua conta</h3>
          <input className='input-company'/>
          <input className='input-user'/>
          <input className='input-password'/>
          <a href='#' className='recover-password'>Esqueceu sua senha?</a> 
          <button>Login</button>
          <p>Não possui uma conta?</p>
          <a href='#' className='sign-up'>Solicitar cadastro</a>
        </form>
    )
}

export default FormLogin
