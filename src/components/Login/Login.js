import React from "react";
import loginClass from './Login.module.css';
import {Form, Field} from 'react-final-form'
import {Element} from "../common/FormControls/FormControls";
import {composeValidators, maxLength, required} from "../../utilities/validators/validators";

const Input = Element("input");

export const onSubmit = (values) => {
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
    validate={values => {
    }}
    render={({handleSubmit, pristine, form, submitting}) => (
      <form onSubmit={handleSubmit} action="">
        <div>
          <Field name="login" component={Input} type="text" placeholder={'login'}
                 validate={composeValidators(required, maxLength(20))}/>
        </div>
        <div>
          <Field name="password" component={Input} type="text" placeholder={'password'}/>
        </div>
        <div>
          <Field name="rememberMe" component="input" type="checkbox"/>Remember me
        </div>
        <div>
          <button disabled={submitting} type="submit">Log in</button>
        </div>
      </form>
    )}
  />
}


export default Login;
