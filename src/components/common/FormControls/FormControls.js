import React from "react";
import styles from "./FormControls.module.scss";

export const Textarea = ({input, meta, ...props}) => {
    // debugger
    const hasError = meta.error && meta.touched;
    return (
        <div>
            <textarea className={hasError ? styles.errorForm : styles.rightForm} {...input} {...props} />
            <span className={hasError ? styles.errorText : ''}>{meta.error}</span>
        </div>
    )
};

export const Input = ({input, meta, ...props}) => {
    // debugger
    const hasError = meta.error && meta.touched;
    return (
        <div>
            <input className={hasError ? styles.errorForm : styles.rightForm} {...input} {...props} />
            <span className={hasError ? styles.errorText : styles.hidden}>{meta.error}</span>
        </div>
    )
};
