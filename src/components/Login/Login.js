import React from "react";
import loginClass from './Login.module.css';
import {Form, Field} from 'react-final-form'
import {Element} from "../common/FormControls/FormControls";
import {composeValidators, maxLength, required} from "../../utilities/validators/validators";
import {login} from "../../data/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const Input = Element("input");

const Login = (props) => {
  const onSubmit = (values) => {
    props.login(values.email, values.password, values.rememberMe)
  }
  if (props.isAuth) {
    return <Redirect to={'/main'}/>
  }


  return <div className={loginClass.container}>
    <h1>Login</h1>
    <LoginForm onSubmit={onSubmit}/>
  </div>
}

const LoginForm = (props) => {
  return <Form
    initialValues={{
      email: '',
      password: '',
      rememberMe: false,
    }}
    onSubmit={props.onSubmit}
    validate={values => {
    }}
    render={({handleSubmit, pristine, form, submitting}) => (
      <form onSubmit={handleSubmit} action="">
        <div>
          <Field name="email" component={Input} type="text" placeholder={'email'}
                 validate={composeValidators(required, maxLength(30))}/>
        </div>
        <div>
          <Field name="password" component={Input} type="password" placeholder={'password'}/>
        </div>
        <div>
          <Field name="rememberMe" component={Input} type="checkbox"/>Remember me
        </div>
        <div>
          <button disabled={submitting} type="submit">Log in</button>
        </div>
      </form>
    )}
  />
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect (mapStateToProps, {login}) (Login);
