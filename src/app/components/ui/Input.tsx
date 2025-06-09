import React from 'react';
import { Field, useField } from "formik";
import { Manrope } from "next/font/google";
import { InputProps } from "../../types/others";

const manrope500 = Manrope({
  subsets: ["latin"],
  weight: "500"
});

export const Input: React.FC<InputProps>  = ({label, placeholder, ...props}) => {
  const [, meta] = useField(props);
  
  return (
    <div className="customise-page__column direction-column">
		<label className="customise-page__label" htmlFor={props.id || props.name}>
			{label}
		</label>
		<Field {...props} type="text" placeholder={placeholder} className={`${manrope500.className} customise-page__input ${meta.touched && meta.error ? 'customise-page__input-error' : ''}`}/>
	</div>
  )
}