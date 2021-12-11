import React from "react";
import formControlClass from './FormControls.module.css'

export const Textarea = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;

  return <div className={formControlClass.control + ' ' + (hasError ? formControlClass.error : '')}>
    <textarea
      {...input}{...props}
      name="textarea"
      cols="30"
      rows="10"/>
    {hasError && <div>{meta.error}</div>}
  </div>
}