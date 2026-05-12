import { func } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import UserForm from "../../Hooks/userForm";
import { TOKEN_POST, USER_GET } from "../../api";
import { UserContext } from "../../UserContext";

const LoginForm = () => {
  const username = UserForm();
  const password = UserForm();
  
  const { userLogin, error, loading, login } = React.useContext(UserContext);
  
  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);

    
      
  }
}

  return (
  <section>
    <h1>Login</h1>
    <form action="" onSubmit={handleSubmit}>
      <Input label="Usuário" type="text" name="username" {...username}/>
      <Input label="Senha" type="password" name="password" {...password} />
      {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
      {error && <p >{error}</p>}
    </form>
    <Link to="/login/criar">Cadrastro</Link>
  </section>
  );
};

export default LoginForm;
