/**
 * THIS HEADER SHOULD BE KEPT INTACT IN ALL CODE DERIVATIVES AND MODIFICATIONS.
 * 
 * This file provided by IPT is for non-commercial testing and evaluation
 * purposes only. IPT reserves all rights not expressly granted.
 *  
 * The security implementation provided is DEMO only and is NOT intended for production purposes.
 * It is exclusively your responsisbility to seek advice from security professionals 
 * in order to secure the REST API implementation properly.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * IPT BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

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