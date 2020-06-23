import React from 'react'
import LabelsObj from '../../../helpers/labels';

const ClientDetailContent:React.FC<{data: Person}> = ({ data }) => (
    <div className="container">
        <div className="row mb-2">
            <div className="col-sm text-right">
                {LabelsObj.name}
                :
            </div>
            <div className="col-sm">{data.name}</div>
        </div>
        <div className="row mb-2">
            <div className="col-sm text-right">
                {LabelsObj.lastname}
                :
            </div>
            <div className="col-sm">{data.lastname}</div>
        </div>
        <div className="row mb-2">
            <div className="col-sm text-right">
                {LabelsObj.email}
                :
            </div>
            <div className="col-sm">{data.email}</div>
        </div>
        <div className="row mb-2">
            <div className="col-sm text-right">
                {LabelsObj.phone}
                :
            </div>
            <div className="col-sm">{data.phone}</div>
        </div>
        <div className="row mb-2">
            <div className="col-sm text-right">
                {LabelsObj.uezd}
                :
            </div>
            <div className="col-sm">{data.uezd}</div>
        </div>
        <div className="row mb-2">
            <div className="col-sm text-right">
                {LabelsObj.city}
                :
            </div>
            <div className="col-sm">{data.city}</div>
        </div>
        <div className="row mb-2">
            <div className="col-sm text-right">
                {LabelsObj.address}
                :
            </div>
            <div className="col-sm">{data.address}</div>
        </div>
        <div className="row mb-2">
            <div className="col-sm text-right">
                {LabelsObj.index}
                :
            </div>
            <div className="col-sm">{data.index}</div>
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
            <div className="col-sm">{data.language}</div>
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
                <input type="checkbox" checked={data.smssend} disabled />
            </div>
        </div>
        <div className="row mb-2">
            <div className="col-sm text-right">
                {LabelsObj.emailsend}
                :
            </div>
            <div className="col-sm">
                <input type="checkbox" checked={data.emailsend} disabled />
            </div>
        </div>
    </div>
)

export default ClientDetailContent
