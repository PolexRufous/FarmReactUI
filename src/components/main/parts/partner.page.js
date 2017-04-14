import React from 'react';
import {FormattedMessage} from 'react-intl';
import * as GlobalConfig from '../../../global.config.json';
import PartnersStore from '../stores/partners/partners.store';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import PartnerDetails from './partner.details';

export default class Partner extends React.Component {
    constructor(properties) {
        super(properties);
        this.getPartners = this.getPartners.bind(this);
        this.state = {
            partners: PartnersStore.getAll(),
        }
    }

    componentWillMount() {
        PartnersStore.on('change', this.getPartners);
    }

    componentWillUnmount() {
        PartnersStore.removeListener('change', this.getPartners);
    }

    getPartners() {
        this.setState({
            partners: PartnersStore.getAll()
        });
    }

    render() {
        const partner = this.getPartner(this.props.match.params.partnerId);
        return (
            <div className='main-wrapper container row'>
                <div className='col-md-9' id='partner-info'>
                    {header(partner)}
                    {editButton(this)}
                    {<PartnerDetails partner={partner}/>}
                    {saveCancelNav()}
                </div>
            </div>
        );
    }

    getPartner(id) {
        return this.state.partners.find((partner) => {
            return partner.id == id;
        })
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