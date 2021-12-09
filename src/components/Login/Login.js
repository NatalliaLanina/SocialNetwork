import React from "react";
import loginClass from './Login.module.css';
import {Form, Field} from 'react-final-form'

const onSubmit = (values) => {
  console.log(JSON.stringify(values))
}

const Login = (props) => {
  return <div className={loginClass.container}>
    <h1>Login</h1>
    <LoginForm/>
  </div>
}

const LoginForm = (props) => {
  return <Form
    initialValues={{
      login: '',
      password: '',
    }}
    onSubmit={onSubmit}
    validate={values => {}}
    render={({handleSubmit, pristine, form, submitting}) => (
      <form onSubmit={handleSubmit} action="">
        <div>
          <Field
            name="login"
            component="input"
            type="text"
            placeholder={'login'}/>
        </div>
        <div>
          <Field
            name="password"
            component="input"
            type="text"
            placeholder={'password'}/>
        </div>
        <div>
          <Field  name="rememberMe" component="input" type="checkbox"/>Remember me
        </div>
        <div>
          <button disabled={submitting} type="submit">Log in</button>
        </div>
      </form>
    )}
  />
}


export default Login;
