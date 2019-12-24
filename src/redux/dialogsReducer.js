let inititalState = {
    dialogs : [
        { id : '1' , userName: 'Павел Кабацкий'},
        { id : '2' , userName: 'Вероника Кабацкая'},
        { id : '3' , userName: 'Роман Хеммелис'},
        { id : '4' , userName: 'Иван Таиров'}
    ],
    messages : [
        { id : '1' , text: 'Hello'},
        { id : '1' , text: 'How are you?!'},
        { id : '1' , text: 'I`m feeling good, bro, thanks!'},
        { id : '1' , text: 'Yo!'},
       
    ],
    
}
const dialogsReducer = (state = inititalState, action) => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            return {
                ...state,
                messages : [...state.messages, {
                    id : '1' ,
                    text: action.message
                }],
               
            };  
        }   
        default:
            return state;
    }
}
const SEND_MESSAGE = 'SEND-MESSAGE';

export const sendMessageActionCreator = (message) => ({type: SEND_MESSAGE, message});
export default dialogsReducer;