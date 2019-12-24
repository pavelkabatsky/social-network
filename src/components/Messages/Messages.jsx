import React from 'react';
import s from './Messages.module.css';
import Message from './MessageItem/MessageItem';
import Dialog from './DialogItem/DialogItem';
import { Field, reduxForm } from 'redux-form';
import { elementCreator } from '../../common/validation/formControls';
import { required } from '../../common/validation/validation';


const Textarea = elementCreator('textarea');

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name = 'newMessageText'
                component= {Textarea}
                placeholder='Введите сообщение...'
                validate = {[required]}
            />
            <button>Отправить</button>
        </form>
    )
}

const ReduxNewMessageForm = reduxForm({form : 'dialogsNewMessage'})(NewMessageForm)

const Messages = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map(dialog => <Dialog key={dialog.id} name={dialog.userName} id={dialog.id} />);
    const messagesElements = props.dialogsPage.messages.map(message => <Message key={message.id} text={message.text} />);
 
    const sendMessage = (values) => {
        props.sendMessage(values.newMessageText);
    }

    return (
        <div className={s.messagesWrap}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.messagesScroller}>
                    {messagesElements}
                </div>
                <ReduxNewMessageForm onSubmit={sendMessage}/>
            </div>

        </div>
    );
}

export default Messages;