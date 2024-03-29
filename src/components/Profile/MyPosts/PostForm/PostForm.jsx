import React from 'react'
import Field from 'redux-form/lib/Field'
import reduxForm from 'redux-form/lib/reduxForm'
import { TextArea } from '../../../../FormsControls/FormControls'
import { maxLengthCreator, required } from '../../../../utils/validators/validators'
import s from './PostForm.module.css'

const maxLength30 = maxLengthCreator(30)

const Form = (props) => {
  return <div className={s.postForm}>
    <form onSubmit={props.handleSubmit}>
      <div className={s.textArea}><Field type={'text'} name={'comment'}
       component={TextArea}
       validate={[required, maxLength30]}/></div>
      <div><button className={s.addPost}>Add Post</button></div>
    </form>
  </div>
}

const PostReduxForm = reduxForm({form: 'post'})(Form)

const PostForm = (props) => {
  const onSubmit = (FormData) => {
    props.addPost(FormData.comment)
  }
  return <PostReduxForm onSubmit={onSubmit} />
}

export default PostForm