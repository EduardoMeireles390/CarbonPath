import React from 'react';
import './index.css';
import logo from '../../assets/logo.png';


const App: React.FC = () => {
  return (
    <div className="container">
      <div className="container-form">
        <div className="teste">
          <form className="form">
            <h1>Acesse sua conta</h1> <br />
            <div className="form-group">
              <label htmlFor="exampleInputEmail1"><b>E-mail</b></label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu e-mail" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1"><b>Senha</b></label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Senha" />
            </div>
            <div className="form-check">
              <div className="form-check-row">
                <p className="forgot-password">Esqueci minha senha</p>
                <div className="remember-me">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Lembre-me</label>
                </div>
              </div>
            </div>                    
            <br />
            <button type="submit">Acessar</button>
          </form>
          <br />
          <p>Ainda não tem uma conta? 
            {/* <a href="#">Cadastre-se</a> */}
            </p>
        </div>
      </div>
      <div className='logo'>
        <div className='logo-imagem'>

          <img src={logo} alt="logo" />
        </div>
      </div>

    </div>
  );
}

export default App;
