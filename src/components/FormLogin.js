import './FormLogin.css'

function FormLogin () {
    return (
        <form className='form-login'>
          <h3 className='title-acess-account'>Acesse sua conta</h3>
          <input type='text' className='input-company' placeholder='Empresa'/>
          <input type='text' className='input-user' placeholder='Usuário'/>
          <input type='password' className='input-password' placeholder='Senha'/>
          <a href='#' className='recover-password'>Esqueceu sua senha?</a> 
          <button className='button-login'>Login</button>
          <p className='no-account'>Não possui uma conta?</p>
          <a href='#' className='sign-up'>Solicitar cadastro</a>
        </form>
    )
}

export default FormLogin
