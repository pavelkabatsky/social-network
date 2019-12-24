
import React from 'react';
import { newPostActionCreator } from '../../../redux/profileReducer';
import Posts from './Posts';
import { connect } from 'react-redux';

class PostsContainer extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps!==this.props || nextState!==this.state
    }
    
    render() {
        return (
            <Posts {...this.props} />
        )
       
    }
}

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(newPostActionCreator(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
