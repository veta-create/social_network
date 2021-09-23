import React from 'react'
import Field from 'redux-form/lib/Field'
import reduxForm from 'redux-form/lib/reduxForm'
import { TextArea } from '../../FormsControls/FormControls'
import { maxLengthCreator, required } from '../../utils/validators/validators'

const maxLength1000 = maxLengthCreator(1000)

const Form = (props) => {
  return <div>
    <form onSubmit={props.handleSubmit}>
      <div><Field type={'text'}
       name={'message'}
       placeholder={'your message'}
       component={TextArea} 
       validate={[required, maxLength1000]}/></div>
      <div><button>Send</button></div>
    </form>
  </div>
}

const MessageReduxForm = reduxForm({ form: 'message' })(Form)

const MessageForm = (props) => {
  const onSubmit = (FormData) => {
    props.addMessage(FormData.message)
  }
  return <MessageReduxForm onSubmit={onSubmit}/>
}

export default MessageForm