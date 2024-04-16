import React from 'react';
import './index.css';
import logo from '../../assets/logo.png';
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as yup from "yup";


const App: React.FC = () => {

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Email inválido")
      .required("Email obrigatório"),
    senha: yup
      .string()
      .min(8, "Obrigatório mínimo de 8 caracteres")
      .required("Senha obrigatória")
  });


  return (
    <div className="container">
      <div className="container-form">
        <div className="teste">
        <Formik initialValues={{ email: "", senha: "" }} validationSchema={validationSchema} onSubmit={(values) => {
            // Lógica para lidar com o envio do formulário
            console.log(values);
          }}>
          <Form className="form">
            <h1>Acesse sua conta</h1> <br />
            <div className="form-group">
              <label htmlFor="exampleInputEmail1"><b>E-mail</b></label>
              <Field type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu e-mail" />
              <ErrorMessage component="div" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1"><b>Senha</b></label>
              <Field type="password" name='senha' className="form-control" id="exampleInputPassword1" placeholder="Senha" />
              <ErrorMessage component="div" name="senha" />
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
          </Form>
          </Formik>
          <br />
          <p>Ainda não tem uma conta? 
             <a href="/cadastro">Cadastre-se</a>
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
