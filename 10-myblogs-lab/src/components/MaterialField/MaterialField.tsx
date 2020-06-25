import { FormikContextType, useFormikContext, Field, ErrorMessage } from "formik";
import React from "react";
import './MaterialField.css';

interface MaterialFiledProps<Values> {
    name: keyof Values;
    label: string
    displayAs?: string;
}

export function MaterialFiled<Values>({ name, label, displayAs }: MaterialFiledProps<Values>) {
    const props: FormikContextType<Values> = useFormikContext<Values>();
    const errors = props.errors;
    const touched = props.touched;
    let classes = displayAs === 'textarea' ? 'materialize-textarea ': '';
    classes += errors[name] && touched[name] ? 'invalid' : 'valid';
    return (
        <div className="input-field col s12">
            <Field type="text" as={displayAs} className={classes} name={name} />
            <label className={errors[name] && touched[name] ? 'active field-error' : 'active'} htmlFor={name.toString()}>
                {label}
            </label>
            <ErrorMessage className="field-error" name={name.toString()} component="div" />
        </div>
    );
};