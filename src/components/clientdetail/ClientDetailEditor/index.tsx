import React from 'react'
import LabelsObj from '../../../helpers/labels';
import Input from '../../input';
import Select from '../../select';
import Checkbox from '../../checkbox';

const uezd: { title: string, value: string }[] = [
    {
        title: '---',
        value: '',
    },
    {
        title: 'Уезд1',
        value: 'Уезд1',
    },
    {
        title: 'Уезд2',
        value: 'Уезд2',
    },
    {
        title: 'Уезд3',
        value: 'Уезд3',
    },
]

const language: { title: string, value: string }[] = [
    {
        title: 'Русский',
        value: 'Русский',
    },
    {
        title: 'Украинский',
        value: 'Украинский',
    },
    {
        title: 'Английский',
        value: 'Английский',
    },
    {
        title: 'Китайский',
        value: 'Китайский',
    },
]

const ClientDetailEditor:React.FC<{data: Person, formik: any}> = ({ data, formik }) => (
    <div className="container">
        <form onSubmit={formik.handleSubmit}>
            <div className="row mb-2">
                <div className="col-sm text-right align-middle">
                    {LabelsObj.name}
                    :
                </div>
                <div className="col-sm">
                    <Input
                        type="text"
                        placeholder={LabelsObj.name}
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        error={formik.errors.name}
                    />
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-sm text-right">
                    {LabelsObj.lastname}
                    :
                </div>
                <div className="col-sm">
                    <Input
                        type="text"
                        placeholder={LabelsObj.lastname}
                        name="lastname"
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
                        error={formik.errors.lastname}
                    />
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-sm text-right">
                    {LabelsObj.email}
                    :
                </div>
                <div className="col-sm">
                    <Input
                        type="email"
                        placeholder={LabelsObj.email}
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={formik.errors.email}
                    />
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-sm text-right">
                    {LabelsObj.phone}
                    :
                </div>
                <div className="col-sm">
                    <Input
                        type="text"
                        placeholder={LabelsObj.phone}
                        name="phone"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        error={formik.errors.phone}
                    />
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-sm text-right">
                    {LabelsObj.uezd}
                    :
                </div>
                <div className="col-sm">
                    <Select
                        name="uezd"
                        values={uezd}
                        onChange={formik.handleChange}
                        value={formik.values.uezd}
                        error={formik.errors.uezd}
                    />
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-sm text-right">
                    {LabelsObj.city}
                    :
                </div>
                <div className="col-sm">
                    <Input
                        type="text"
                        placeholder={LabelsObj.city}
                        name="city"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                        error={formik.errors.city}
                    />
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-sm text-right">
                    {LabelsObj.address}
                    :
                </div>
                <div className="col-sm">
                    <Input
                        type="text"
                        placeholder={LabelsObj.address}
                        name="address"
                        onChange={formik.handleChange}
                        value={formik.values.address}
                        error={formik.errors.address}
                    />
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-sm text-right">
                    {LabelsObj.index}
                    :
                </div>
                <div className="col-sm">
                    <Input
                        type="text"
                        placeholder={LabelsObj.index}
                        name="index"
                        onChange={formik.handleChange}
                        value={formik.values.index}
                        error={formik.errors.index}
                    />
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-sm text-right">
                    {LabelsObj.status}
                    :
                </div>
                <div className="col-sm">{data.status}</div>
            </div>
            <div className="row mb-2">
                <div className="col-sm text-right">
                    {LabelsObj.origin}
                    :
                </div>
                <div className="col-sm">{data.origin}</div>
            </div>
            <div className="row mb-2">
                <div className="col-sm text-right">
                    {LabelsObj.regestrationIp}
                    :
                </div>
                <div className="col-sm">
                    {data.regestrationIp}
                    {' '}
                    (
                    {data.regestrationRegion}
                    )
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-sm text-right">
                    {LabelsObj.language}
                    :
                </div>
                <div className="col-sm">
                    <Select
                        name="language"
                        values={language}
                        onChange={formik.handleChange}
                        value={formik.values.language}
                        error={formik.errors.language}
                    />
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-sm text-right">
                    {LabelsObj.invited}
                    :
                </div>
                <div className="col-sm">{data.invited}</div>
            </div>
            <div className="row mb-2">
                <div className="col-sm text-right">
                    {LabelsObj.smssend}
                    :
                </div>
                <div className="col-sm">
                    <Checkbox name="smssend" onChange={formik.handleChange} value={formik.values.smssend} />
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-sm text-right">
                    {LabelsObj.emailsend}
                    :
                </div>
                <div className="col-sm">
                    <Checkbox name="emailsend" onChange={formik.handleChange} value={formik.values.emailsend} />
                </div>
            </div>
        </form>
    </div>
)

export default ClientDetailEditor;
