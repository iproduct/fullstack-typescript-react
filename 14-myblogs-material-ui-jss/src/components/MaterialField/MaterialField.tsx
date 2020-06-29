import {Field, ErrorMessage, getIn, connect, FormikContextType } from 'formik';
import React from "react";
import './MaterialField.css';

interface MaterialFiledProps {
    name: string;
    label: string
    displayAs?: string;
}

function MaterialFiled(
    { name, label, displayAs, formik }: MaterialFiledProps & {formik: FormikContextType<{}>;} ) {
    // const props = useFormikContext();
    const error = getIn(formik.errors, name);
    const touched = getIn(formik.touched, name);
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

export default connect<MaterialFiledProps>(MaterialFiled);