import { FormikContextType, useFormikContext, Field, ErrorMessage, getIn } from "formik";
import React from "react";
import './MaterialField.css';

interface MaterialFiledProps {
    name: string;
    label: string
    displayAs?: string;
}

export function MaterialFiled({ name, label, displayAs }: MaterialFiledProps) {
    const props = useFormikContext();
    const error = getIn(props.errors, name);
    const touched = getIn(props.touched, name);
    let classes = displayAs === 'textarea' ? 'materialize-textarea ': '';
    classes += error && touched ? 'invalid' : 'valid';
    return (
        <div className="input-field col s12">
            <Field type="text" as={displayAs} className={classes} name={name} />
            <label className={error && touched ? 'active field-error' : 'active'} htmlFor={name}>
                {label}
            </label>
            <ErrorMessage className="field-error" name={name} component="div" />
        </div>
    );
};