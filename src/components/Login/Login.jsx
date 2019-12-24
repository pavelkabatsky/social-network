import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../common/validation/validation';
import { elementCreator } from '../../common/validation/formControls';
import { Redirect } from 'react-router-dom';
import styles from './../../common/validation/validation.module.css'

const Login = (props) => {
   
    const onSubmit = (formData) => {
        let password = formData.password;
        let email = formData.login;
        let rememberMe = formData.rememberMe;
        props.login(email,password,rememberMe)
    }
    const ReduxLoginForm = reduxForm({form: 'loginForm'})(LoginForm)

    if(props.isAuth) {
        return <Redirect to='/profile'/>
    }

    return (
        <>
            <h1>Введите ваш логин и пароль</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </>
    )
}

const Input = elementCreator('input');
const LoginForm = (props) => {
    
    return (
        <>  
            {props.error && <div className={styles.formError}> {props.error} </div>}
            <form onSubmit={props.handleSubmit}>
                <Field placeholder={'Your login'} name={'login'} component={Input} validate={[required]} /><br />
                <Field type='password' placeholder={'Your password'} name={'password'} component={Input} validate={[required]} /><br />
                <Field type={'checkbox'} name={'rememberMe'} component={'input'} />Remember me<br />
                <button>Login</button>
            </form>
        </>
        
    )
}

export default Login;