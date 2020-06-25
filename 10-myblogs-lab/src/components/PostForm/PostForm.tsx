import * as React from 'react';
import { PostCallback, IdType } from '../../shared/shared-types';
import { Post } from '../../model/post.model';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { DisplayFormikState } from '../DisplayFormikState/DispalyFormikState';

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


export const PostForm: React.FC<Props> = ({ post, onSubmitPost }) => {
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
            {({ dirty, touched, errors, isSubmitting, handleReset }) => {
                return (
                    <Form>
                        <Field type="email" name="email" />
                        <ErrorMessage className="input-feedback" name="email" component="div" />
                        <Field type="password" name="password" />
                        <ErrorMessage className="input-feedback" name="password" component="div" />
                        <button type="submit" disabled={isSubmitting ||
                            Object.values(touched).every(fieldTouched => !fieldTouched) ||
                            Object.values(errors).some(err => !!err === true)}>
                            Submit
                        </button>
                        <button type="button" className="outline" onClick={handleReset}
                            disabled={!dirty || isSubmitting}> Reset </button>
                        <DisplayFormikState />
                    </Form>
                )
            }
            }
        </Formik>
    );
};
