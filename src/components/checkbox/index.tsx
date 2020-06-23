import React from 'react'
import './index.scss';

type Checkbox = {
    name:string,
    text?:string,
    onChange: any,
    value: boolean
}

const Checkbox:React.FC<Checkbox> = ({
    name, text, onChange, value,
}) => (
    <label className="checkbox" htmlFor={name}>
        <input type="checkbox" name={name} id={name} onChange={onChange} checked={value} />
        {text && text}
    </label>
)

export default Checkbox;
