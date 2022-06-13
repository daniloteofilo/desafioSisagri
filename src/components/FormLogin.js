import './FormLogin.css'
import { useState } from 'react'

  
function FormLogin ({ onSuccess }) {
    const [company, setCompany] = useState('')
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [authError, setAuthError] = useState('')


    const authenticate = () => {
      if (company === '1' && user === '4' && password === '123456') {
        onSuccess()
      } else {
        setAuthError('Credenciais inválidas!')
      }
    }
  

    return (
        <form className='form-login'>
          <h3 className='title-acess-account'>Acesse sua conta</h3>
          <input onChange={event => setCompany(event.target.value)} type='text' className='input-company' placeholder='Empresa'/>
          <input onChange={event => setUser(event.target.value)} type='text' className='input-user' placeholder='Usuário'/>
          <input onChange={event => setPassword(event.target.value)} type='password' className='input-password' placeholder='Senha'/>
          <a href='#' className='recover-password'>Esqueceu sua senha?</a> 
          <p className='error'>{authError}</p>
          <button type='button' onClick={authenticate} className='button-login'>Login</button>
          <p className='no-account'>Não possui uma conta?</p>
          <a href='#' className='sign-up'>Solicitar cadastro</a>
        </form>
    )
}


export default FormLogin
