import React from 'react';
import { Field, useField } from "formik";

type InputProps = {
    id: string;
    label?: string;
    name: string;
    placeholder?: string;
}

export const Input: React.FC<InputProps>  = ({label, placeholder, ...props}) => {
  const [, meta] = useField(props);
  
  return (
    <div className="customise-page__column direction-column">
		<label className="customise-page__label" htmlFor={props.id || props.name}>
			{label}
		</label>
		<Field {...props} type="text" placeholder={placeholder} className={`customise-page__input ${meta.touched && meta.error ? 'customise-page__input-error' : ''}`}/>
	</div>
  )
}