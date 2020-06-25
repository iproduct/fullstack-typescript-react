/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { useFormikContext } from 'formik';

export const DisplayFormikState = (props: any) => {
  // Grab values and submitForm from context
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const myprops = useFormikContext();
  return (
    <div style={{ margin: '1rem 0' }}>
      <h3 style={{ fontFamily: 'monospace' }} />
      <pre
        style={{
          color: 'black',
          background: '#f6f8fa',
          fontSize: '.65rem',
          padding: '.5rem',
        }}
      >
        <strong>props</strong> = {JSON.stringify(myprops, null, 2)}
      </pre>
    </div>);
}

export const MoreResources = () =>
  <div>
    <hr style={{ margin: '3rem 0' }} />
    <h3>More Examples</h3>
    <ul>
      <li>
        <a
          href="https://codesandbox.io/s/q8yRqQMp"
          target="_blank"
          rel="noopener"
        >
          Synchronous validation
        </a>
      </li>
      <li>
        <a
          href="https://codesandbox.io/s/qJR4ykJk"
          target="_blank"
          rel="noopener"
        >
          Building your own custom inputs
        </a>
      </li>
      <li>
        <a
          href="https://codesandbox.io/s/jRzE53pqR"
          target="_blank"
          rel="noopener"
        >
          3rd-party input components: React-select
        </a>
      </li>
      <li>
        <a
          href="https://codesandbox.io/s/QW1rqjBLl"
          target="_blank"
          rel="noopener"
        >
          3rd-party input components: Draft.js
        </a>
      </li>
      <li>
        <a
          href="https://codesandbox.io/s/pgD4DLypy"
          target="_blank"
          rel="noopener"
        >
          Accessing Lifecyle Methods (resetting a form externally)
        </a>
      </li>
    </ul>
    <h3 style={{ marginTop: '1rem' }}>Additional Resources</h3>
    <ul>
      <li>
        <a
          href="https://github.com/jaredpalmer/formik"
          target="_blank"
          rel="noopener"
        >
          GitHub Repo
        </a>
      </li>
      <li>
        <a
          href="https://github.com/jaredpalmer/formik/issues"
          target="_blank"
          rel="noopener"
        >
          Issues
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/jaredpalmer"
          target="_blank"
          rel="noopener"
        >
          Twitter (@jaredpalmer)
        </a>
      </li>
    </ul>
  </div>;
