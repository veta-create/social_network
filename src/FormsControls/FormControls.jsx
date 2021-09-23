import React from 'react'
import s from './FormControls.module.css'
import error from '../assets/images/error.png'

export const TextArea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error
  return <div className={s.formControl + ' ' + s.textField}>
    <div>
      <textarea {...input} {...props} />
    </div>
    {hasError && <div>
      <div className={s.error}><img src={error}/></div>
      <span className={s.errorText}>{meta.error}</span>
      </div>}
  </div>
}

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error
  return <div>
    <div><input {...input} {...props}/></div>
    {hasError && <span className={s.errorText}>{meta.error}</span>}
  </div>
}