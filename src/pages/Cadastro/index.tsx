import React from "react";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import { cnpj } from "cpf-cnpj-validator";

const App = () => {

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Email inválido")
      .required("Email obrigatório"),
    CNPJ: yup
      .string()
      .required("CNPJ obrigatório")
      .test((value) => cnpj.isValid(value)),
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
              <h1>Crie sua conta</h1>
              <div className="form-group">
                <label htmlFor="razaoSocial"><b>Razão Social</b></label>
                <input required type="text" className="form-control" id="razaoSocial" placeholder="Digite a Razão Social da empresa" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1"><b>E-mail</b></label>
                <Field required type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu e-mail" />
                <ErrorMessage component="div" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="cnpj"><b>CNPJ</b></label>
                <Field required type="text" name="CNPJ"className="form-control" id="cnpj" placeholder="Digite o CNPJ da empresa" />
                <ErrorMessage component="div" name="CNPJ" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1"><b>Senha</b></label>
                <Field required type="password" name="senha" className="form-control" id="exampleInputPassword1" placeholder="Senha" />
                <ErrorMessage component="div" name="senha" />
              </div>
              <button type="submit">Acessar</button>
            </Form>
          </Formik>
          <div className='logo'>
            <div className='logo-imagem'>
              {/* Certifique-se de que o caminho para a imagem está correto */}
              <img src="../src/assets/logo.png" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
