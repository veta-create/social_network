import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthReducer } from '../../hoc/withAuthReducer';
import { addMessageActionCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageText) => {
      let action = addMessageActionCreator(newMessageText)
      dispatch(action)
    }
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthReducer)(Dialogs);