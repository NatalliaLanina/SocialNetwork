import React from "react";
import formControlClass from './FormControls.module.css'

export const Element = Element => ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={formControlClass.control + ' ' + (hasError ? formControlClass.error : '')}>
      <Element {...input} {...props} />
      {hasError && <div>{meta.error}</div>}
    </div>
  );
};
