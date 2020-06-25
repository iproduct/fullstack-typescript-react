
import { PostCallback } from '../../shared/shared-types';
import { Post } from '../../model/post.model';
import { Formik, Form, Field, ErrorMessage, useFormikContext, FormikConfig, FormikState } from 'formik';
import * as Yup from 'yup';
import { DisplayFormikState } from '../DisplayFormikState/DispalyFormikState';
import React, { FC } from 'react';
import './PostForm.css';

interface Props {
    post: Post | undefined;
    onSubmitPost: PostCallback;
}

interface MyFormValues {
    title: string;
    text: string;
    imageUrl?: string;
    categories?: string;
    keywords?: string;
}

export const PostForm: FC<Props> = ({ post, onSubmitPost }) => {
    const initialValues: MyFormValues = {
        title: post?.title || '',
        text: post?.text || '',
        imageUrl: post?.imageUrl || '',
        categories: post?.categories?.join(', ') || '',
        keywords: post?.keywords.join(', ') || ''
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={async values => {
                await new Promise(resolve => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
            }}
            validationSchema={Yup.object().shape({
                title: Yup.string().required().min(2).max(40),
                text: Yup.string().required().min(2).max(1024),
                imageUrl: Yup.string().url(),
                categories: Yup.string().matches(/(([\w-_+]+)[,\s]+)+/),
                keywords: Yup.string().matches(/(([\w-_+]+)[,\s]+)+/),
            })}
        >
            {({ values, handleChange, dirty, touched, errors, isSubmitting, handleReset }) => {
                return (
                    <Form className="col s6">
                        <div className="row">
                            <MaterialFiled name='title' label='Title' />
                            <MaterialFiled name='text' label='Blog Text' />
                            <MaterialFiled name='imageUrl' label='Blog Image URL' />
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action" disabled={isSubmitting ||
                            Object.values(touched).every(fieldTouched => !fieldTouched) ||
                            Object.values(errors).some(err => !!err === true)}>Submit<i className="material-icons right">send</i>
                        </button>
                        <button type="button" className="btn waves-effect waves-light"  onClick={handleReset}
                            disabled={!dirty || isSubmitting}> Reset <i className="material-icons right">cloud</i>
                        </button>
                        <DisplayFormikState />
                    </Form>
                )
            }}
        </Formik>
    );
};


interface MaterialFiledProps {
    name: string;
    label: string
}

export function MaterialFiled({name, label}: MaterialFiledProps) {
    const props = useFormikContext();
    const errors = props.errors as any;
    const touched = props.touched as any;
    console.log(errors,name);
    
    return (
        <div className="input-field col s12">
        <Field type="text" className={errors[name] ? 'field-error': 'valid'} name={name}/>
        <label className={errors[name] && touched[name] ? 'active field-error': 'active'} htmlFor={name}>
            {label}
        </label>
        <ErrorMessage className="field-error" name={name} component="div" />
    </div>
    );
};

