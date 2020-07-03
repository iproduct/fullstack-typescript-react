import React from "react";
import { Field, ErrorMessage, getIn, connect, FormikContextType, FieldProps } from 'formik';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import './MaterialField.css';

interface MaterialFiledProps {
    name: string;
    label: string
    rowsMax?: number;
}

function MaterialFiled({ name, label, rowsMax = 1 }: MaterialFiledProps) {
    // const props = useFormikContext();

    // const {
    //     values,
    //     errors,
    //     touched,
    //     handleChange,
    //     setFieldTouched
    // } = formik;
    // const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     event.persist();
    //     handleChange(event);
    //     setFieldTouched(name, true, true);
    // };
    // const fieldValue = getIn(values, name);
    // const fieldError = getIn(errors, name);
    // const fieldTouched = getIn(touched, name);
    // let classes = displayAs === 'textarea' ? 'materialize-textarea ': '';
    // classes += error && touched ? 'invalid' : 'valid';
    return (
        // <div className="input-field col s12">
        <Field name={name}>
            {({
                field, // { name, value, onChange, onBlur }
                form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                meta,
            }: FieldProps) => (
                    <TextField
                        id={name}
                        helperText={meta.touched ? meta.error : ""}
                        error={meta.touched && Boolean(meta.error)}
                        label={label}
                        fullWidth
                        multiline={rowsMax > 1}
                        rowsMax={rowsMax}
                        {...field}
                    />
                )
            }
        </Field>
        // <TextField
        //     id={name}
        //     name={name}
        //     helperText={fieldTouched ? fieldError : ""}
        //     error={fieldTouched && Boolean(fieldError)}
        //     label={label}
        //     value={fieldValue}
        //     onChange={change}
        //     fullWidth
        // />
        // <Field type="text" as={displayAs} className={classes} name={name} />
        // <TextField id="standard-basic" label="Standard" />
        // <label className={error && touched ? 'active field-error' : 'active'} htmlFor={name}>
        //     {label}
        // </label>
        // <ErrorMessage className="field-error" name={name} component="div" />
        // </div>
    );
};

export default connect<MaterialFiledProps>(MaterialFiled);