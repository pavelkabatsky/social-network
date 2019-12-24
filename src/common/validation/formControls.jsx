import React from 'react';
import styles from './validation.module.css'

export const elementCreator = Element => ({ input, meta, ...props }) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <Element  {...input} {...props} />
            <div>
                {hasError ? <span>{meta.error}</span> : ''}
            </div>
        </div>
    )
}
