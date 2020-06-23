import React from 'react'
import './index.scss';
import cn from 'classnames';

type Select = {
    label?: string,
    name: string
    values: SelectOption[],
    value: any,
    onChange: any,
    error?: string,
}

type SelectOption = {
    title: string;
    value: string | number;
}

const Select:React.FC<Select> = ({
    label, name, values, onChange, value: defaultValue, error,
}) => {
    const cl = cn('custom-select', { 'custom-select--error': error && true })
    return (
        <label className="select" htmlFor={name}>
            { label && <span className="select-title">{label}</span> }
            <select name={name} id={name} className={cl} onChange={onChange} value={defaultValue}>
                { values.map(({ value, title }) => <option key={value} value={value}>{title}</option>) }
            </select>
            <div className="select-error">{error}</div>
        </label>
    )
}

export default Select
