import React from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../FormsControls/FormControls'
import { required } from '../../utils/validators/validators'
import { login } from '../../redux/authReducer'
import error from '../../assets/images/error.png'
import s from './Login.module.css'

const LoginForm = (props) => {
  return <div className={s.form}>
    <form onSubmit={props.handleSubmit}>

      <div><Field type={'text'} placeholder={'Email'} name={'email'} component={Input} validate={[required]} /></div>
      <div><Field type={'password'} placeholder={'password'} name={'password'} component={Input} validate={[required]} /></div>
      <div><Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me </div>
      <div className={s.formSummaryError}>
        {/* <div className={s.error}><img src={error}></img></div> */}
        {props.error && <div>{props.error}</div>}
      </div>
      <div><button>SUBMIT</button></div>

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

  return <div>

    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} />

  </div>
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, { login })(Login)