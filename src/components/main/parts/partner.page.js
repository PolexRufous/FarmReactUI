import React from 'react';
import {FormattedMessage} from 'react-intl';
import * as GlobalConfig from '../../../global.config.json';
import PartnerStore from '../stores/partners/partner.store';
import OperationsOfPartnerStore from '../stores/operations/operations.of.partner.store'
import {Link} from 'react-router-dom';
import PartnerDetails from './partner.details';
import OperationsTable from './operations.table'

export default class Partner extends React.Component {
    constructor() {
        super();
        this.getPartner = this.getPartner.bind(this);
        this.getOperationByPartnerId = this.getOperationByPartnerId.bind(this);
        this.state = {
            partner: PartnerStore.getById(getId()),
            operations: OperationsOfPartnerStore.getByPartnerId(getId())
        }
    }

    componentWillMount() {
        PartnerStore.on('change', this.getPartner);
        OperationsOfPartnerStore.on('change', this.getOperationByPartnerId);
    }

    componentWillUnmount() {
        PartnerStore.removeListener('change', this.getPartner);
        OperationsOfPartnerStore.removeListener('change', this.getOperationByPartnerId);
    }

    getPartner() {
        this.setState({
            partner: PartnerStore.getById(getId())
        });
    }

    getOperationByPartnerId() {
        this.setState({
            operations: OperationsOfPartnerStore.getByPartnerId(getId())
        });
    }

    render() {
        const {partner} = this.state;
        const {operations} = this.state;
        return (
            <div className='main-wrapper container row'>
                {header(partner)}
                <div className='col-md-3' id='partner-info'>
                    <h4><FormattedMessage id='PROFILE'/></h4>
                    {editButton(this)}
                    {<PartnerDetails partner={partner}/>}
                    {saveCancelNav()}
                </div>
                <div className='col-md-6' id='partner-info'>
                    <h4><FormattedMessage id='LATEST_OPERATIONS'/></h4>
                    <OperationsTable operations={operations}/>
                </div>
            </div>
        );
    }
}

function header(partner) {
    if (partner) {
        return (
            <h3>{partner.name}
                <small>(id:{partner.id})</small>
            </h3>
        );
    }
    return (<h3><FormattedMessage id='NO_USER_TO_SHOW'/></h3>)
}

function getId(){
    return window.location.href.substring(window.location.href.lastIndexOf("/")+1);
}

function saveCancelNav() {
    const {main} = GlobalConfig.routes;
    return (
        <div>
            <Link to={main.base + main.partners}>
                <button type='button' className='btn btn-success'><span><FormattedMessage id='SAVE'/></span></button>
            </Link>
            <Link to={main.base + main.partners}>
                <button type='button' className='btn btn-default'><span><FormattedMessage id='CANCEL'/></span></button>
            </Link>
        </div>
    )
}

function editButton(element) {
    return (
        <span><button type='button' className='btn btn-warning' onClick={enableEdit.bind(element)}><FormattedMessage id='EDIT'/></button></span>
    )
}

function enableEdit() {
    let inputs = document.querySelectorAll('#partner-info input');
    if (inputs) {
        inputs.forEach((input) => {
            input.removeAttribute('readOnly');
        })
    }
}