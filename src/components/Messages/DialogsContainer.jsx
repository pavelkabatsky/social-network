
import { sendMessageActionCreator } from '../../redux/dialogsReducer';
import Messages from './Messages';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


const mapStateToProps = (state) => ({
    dialogsPage : state.dialogsPage
})

const mapDispatchToProps = (dispatch) => ({

    sendMessage : (message) => {
        dispatch(sendMessageActionCreator(message))
    }
    
})

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Messages)