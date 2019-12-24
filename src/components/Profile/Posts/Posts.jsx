import React from 'react';
import s from './Posts.module.css'
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength } from '../../../common/validation/validation';
import { elementCreator } from '../../../common/validation/formControls';

const maxLength15 = maxLength(15);
const Textarea = elementCreator('textarea');

const NewPostForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <Field
                component = {Textarea}
                name='newPostText'
                placeholder='your news...'
                validate={[required,maxLength15]}
            />
            <button>Send</button>
        </form>
    )
}

const ReduxNewPostForm = reduxForm({ form: 'newPostForm'})(NewPostForm)


const Posts =(props) => {
    const postsElements = props.profilePage.posts.map((post) => <Post key={post.id} message={post.postText} likeCount={post.likeCount} />);
   
    const sendNewPost = (values) => {
        props.addPost(values.newPostText);
    }
    
    

    return (
        
        <div className={s.posts}>
            <h3 className={s.posts__title}>My Posts</h3>
            <div className={s.postsForm} >
                <ReduxNewPostForm onSubmit = {sendNewPost}/>
            </div>

            {postsElements}

        </div>
    );
}

export default Posts;