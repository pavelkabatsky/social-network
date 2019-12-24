import React, { Suspense, lazy } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Preloader from './components/Preloader/Preloader';
import { compose } from 'redux';
import {initApp} from './redux/appReducer';
import { Route } from "react-router-dom";

import Sidebar from './components/Sidebar/Sidebar';

import HeaderContainer from './components/Header/HeaderContainer';

// import DialogsContainer from './components/Messages/DialogsContainer';
// import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
// import LoginContainer from './components/Login/LoginContainer';
// import  from './components/Settings/Settings';
// import  from './components/Music/Music';
// import  from './components/News/News';

const DialogsContainer = lazy(() => import('./components/Messages/DialogsContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const LoginContainer = lazy(() => import('./components/Login/LoginContainer'));
const Settings = lazy(() => import('./components/Settings/Settings'));
const Music = lazy(() => import('./components/Music/Music'));
const News = lazy(() => import('./components/News/News'));




class App extends React.Component {

	componentDidMount() {
		this.props.initApp()
	}

	render() {

		if(!this.props.isInitialized) {
			return <Preloader/>
		}

		return (
			<div className='app-wrapper'>
				<HeaderContainer />
				<Sidebar />
				<div className='content-wrapper'>
				<Suspense fallback={<Preloader/>}>
					<Route path='/profile/:userId?' component={ProfileContainer} />
					<Route path='/messages' component={DialogsContainer} />
					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/settings' component={Settings} />
					<Route path='/find_users' component={UsersContainer} />
					<Route path='/login' component={LoginContainer} />
				</Suspense>
				</div>
			</div>
		)

	}
}

const mapStateToProps = (state) => {
	return {
		isInitialized : state.app.isInitialized
	}
}

export default compose(
	connect(mapStateToProps, {initApp}))(App);
