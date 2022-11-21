import React from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../FormsControls/FormControls'
import { required } from '../../utils/validators/validators'
import { login } from '../../redux/authReducer'
import s from './Login.module.css'

const LoginForm = (props) => {
  return <div className={s.form}>
    <form onSubmit={props.handleSubmit}>

      <div><Field type={'text'} placeholder={'Email'} name={'email'} component={Input} validate={[required]} /></div>
      <div><Field type={'password'} placeholder={'password'} name={'password'} component={Input} validate={[required]} /></div>
      <div><Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me </div>
      <div className={s.formSummaryError}>
        {props.error && <div className={s.errorText}>! {props.error}</div>}
      </div>
      <div><button className={s.buttonSubmit}>SUBMIT</button></div>

    </form>
  </div>

}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
  const onSubmit = (FormData) => {
    console.log(FormData)
    props.login(FormData.email, FormData.password, FormData.rememberMe)
  }

  if (props.isAuth === true) {
    return <Redirect to={'/profile'} />
  }

  return <div className={s.login}>
    <h1 className={s.header}>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} />

  </div>
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, { login })(Login)