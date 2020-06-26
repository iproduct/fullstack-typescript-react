
import { PostCallback } from '../../shared/shared-types';
import { Post } from '../../model/post.model';
import * as Yup from 'yup';
import { DisplayFormikState } from '../DisplayFormikState/DispalyFormikState';
import React, { FC, useEffect } from 'react';
import { Formik, Form } from 'formik';
import MaterialFiled from '../MaterialField/MaterialField';
import './PostForm.css';
import { useParams } from 'react-router-dom';
import PostService from '../../service/post-service';

interface Props {
    post: Post | undefined;
    onSubmitPost: PostCallback;
}

export interface MyFormValues {
    id: string;
    title: string;
    text: string;
    imageUrl?: string;
    categories?: string;
    keywords?: string;
}

interface PostFormParams {
    postId: string;
}

export const PostForm: FC<Props> = ({ post, onSubmitPost }) => {
    const initialValues: MyFormValues = {
        id: post?.id || '',
        title: post?.title || '',
        text: post?.text || '',
        imageUrl: post?.imageUrl || '',
        categories: post?.categories?.join(', ') || '',
        keywords: post?.keywords.join(', ') || ''
    }
    
    const params = useParams<PostFormParams>();

    useEffect(() => {
        PostService.
    }, []);

    useEffect(() => {
        Array.from(document.getElementsByTagName('textarea')).map(txtarea => window.M.textareaAutoResize(txtarea));
    });
    return (
        <Formik initialValues={initialValues}
            onSubmit={values => {
                const result = {
                        id: values.id,
                        title:values.title,
                        text: values.text,
                        imageUrl: values.imageUrl,
                        authorId: '1',
                        keywords: values.keywords?.trim().split(/[\s,;]+/).filter(kword => kword.length > 0),
                        categories: values.categories?.trim().split(/[\s,;]+/).filter(kword => kword.length > 0)
                    } as Post;
                onSubmitPost(result);
            }}
            validateOnChange
            validationSchema={Yup.object().shape({
                title: Yup.string().required().min(2).max(40),
                text: Yup.string().required().min(2).max(1024),
                imageUrl: Yup.string().url(),
                keywords: Yup.string().trim().matches(/^([\w-_+]+)([,\s]+([\w-_+]+))*$/, 'Keywords must be a comma/space separated list of words. Words should contain only letters, digits, "_", "+" and "-" characters.'),
                categories: Yup.string().trim().matches(/^([\w-_+]+)([,\s]+([\w-_+]+))*$/, 'Categories must be a comma/space separated list of words. Words should contain only letters, digits, "_", "+" and "-" characters.'),
            })}
        >
            {({ values, handleChange, dirty, touched, errors, isSubmitting, handleReset }) => {
                return (
                    <Form className="col s6">
                        <div className="row">
                            <MaterialFiled name='title' label='Title' />
                            <MaterialFiled name='text' displayAs='textarea' label='Blog Text' />
                            <MaterialFiled name='imageUrl' label='Blog Image URL' />
                            <MaterialFiled name='keywords' label='Keywords' />
                            <MaterialFiled name='categories' label='Categories' />
                        </div>
                        <div className="PostForm-butons row">
                            <button className="btn waves-effect waves-light" type="submit" name="action" disabled={isSubmitting || 
                                !dirty || Object.values(errors).some(err => !!err === true)}>Submit<i className="material-icons right">send</i>
                            </button>
                            <button type="button" className="btn red waves-effect waves-light" onClick={handleReset}
                                disabled={!dirty || isSubmitting}> Reset <i className="material-icons right">settings_backup_restore</i>
                            </button>
                        </div>
                        <DisplayFormikState />
                    </Form>
                )
            }}
        </Formik>
    );
};
