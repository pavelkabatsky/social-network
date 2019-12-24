import React from 'react'
import Login from './Login';
import { connect } from 'react-redux';
import {login} from '../../redux/authReducer';

class LoginContainer extends React.Component {
    render() {
        return <Login login={this.props.login} isAuth={this.props.isAuth}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth : state.auth.isAuth
    }
}

export default connect(mapStateToProps,{login})(LoginContainer);