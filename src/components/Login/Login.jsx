import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from "../common/FormControls/FormControls.module.scss";

const maxLength = maxLengthCreator(30);
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={props.error && styles.errorForm}>
            <div>
                <Field placeholder={'email'} validate={[requiredField, maxLength]} name={'email'} component={Input} />
            </div>
            <div>
                <Field placeholder={'password'} validate={[requiredField]} name={'password'} type={'password'} component={Input}/>
            </div>
            <div>
                <label htmlFor="remember">Remember me</label>
                <Field id={'remember'} name={'rememberMe'} type={'checkbox'} component={'input'}/>
            </div>
            {props.error && <div className={styles.errorText}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, {login}) (Login);
