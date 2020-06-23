import React from 'react'
import './index.scss';
import cn from 'classnames';

type Input = {
    type: string,
    label?: string,
    placeholder: string,
    name: string,
    onChange: any,
    value: any,
    error?: string,
}

const Input:React.FC<Input> = ({
    type, label, placeholder, name, onChange, value: inputvalue, error,
}) => {
    const cl = cn('form-control', { 'form-control--error': error && true })
    return (
        <label className="input" htmlFor={name}>
            { label && <span className="input-title">{label}</span> }
            <input id={name} type={type} className={cl} name={name} placeholder={placeholder} onChange={onChange} value={inputvalue} />
            <div className="input-error">{error}</div>
        </label>
    )
}

export default Input;
