// import profileReducer from "./profileReducer";
// import dialogsReducer from "./dialogsReducer";

// let store = {

//     _callSubscriber(state){
//         console.log('state changed');
//     },

//     _state : {
//         profilePage : {
//             posts : [
//                 {id:1, postText : 'Hi! How are you?', likeCount: '15' },
//                 {id:2, postText : 'Hello! This is my first post here.', likeCount: '8' }
//             ],
//             postText: ''
//         },
//         dialogsPage : {
//             dialogs : [
//                 { id : '1' , userName: 'Павел Кабацкий'},
//                 { id : '2' , userName: 'Вероника Кабацкая'},
//                 { id : '3' , userName: 'Роман Хеммелис'},
//                 { id : '4' , userName: 'Иван Таиров'}
//             ],
//             messages : [
//                 { id : '1' , text: 'Hello'},
//                 { id : '1' , text: 'How are you?!'},
//                 { id : '1' , text: 'I`m feeling good, bro, thanks!'},
//                 { id : '1' , text: 'Yo!'},
               
//             ],
//             defaultMessage : ''
//         }
//     },

//     getState(){
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },

//     dispatch(action) {
        
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

//         this._callSubscriber(this._state);
        
//     }
 
// }



        
// window.state = store._state;
// export default store;



