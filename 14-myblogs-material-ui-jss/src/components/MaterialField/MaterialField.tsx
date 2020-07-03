import TextField from '@material-ui/core/TextField';
import { connect, Field, FieldProps } from 'formik';
import React from 'react';

interface MaterialFiledProps {
    name: string;
    label: string
    rowsMax?: number;
}

function MaterialFiled({ name, label, rowsMax = 1 }: MaterialFiledProps) {
    return (
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
    );
};

export default connect<MaterialFiledProps>(MaterialFiled);