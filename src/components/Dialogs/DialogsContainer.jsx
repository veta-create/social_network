import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthReducer } from '../../hoc/withAuthReducer';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      let action = addMessageActionCreator()
      dispatch(action)
    },
    updateNewMessageText: (text) => {
      let action = updateNewMessageTextActionCreator(text)
      dispatch(action)
    }
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthReducer)(Dialogs);