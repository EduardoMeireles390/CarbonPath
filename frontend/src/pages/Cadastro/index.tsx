import React from 'react';

const App = () => {
  return (
    <div className="container">
      <div className="container-form">
        <div className="teste">
          <form className="form">
            <h1>Crie sua conta</h1>
            <div className="form-group">
              <label htmlFor="razaoSocial"><b>Razão Social</b></label>
              <input type="text" className="form-control" id="razaoSocial" placeholder="Digite a Razão Social da empresa" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1"><b>E-mail</b></label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu e-mail" />
            </div>
            <div className="form-group">
              <label htmlFor="cnpj"><b>CNPJ</b></label>
              <input type="text" className="form-control" id="cnpj" placeholder="Digite o CNPJ da empresa" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1"><b>Senha</b></label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Senha" />
            </div>
            <button type="submit">Acessar</button>
          </form>
          <div className='logo'>
            <div className='logo-imagem'>
              {/* Certifique-se de que o caminho para a imagem está correto */}
              <img src="../../frontend/src/assets/logo.png" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
