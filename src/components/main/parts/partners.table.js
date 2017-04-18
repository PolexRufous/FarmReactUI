import React from 'react';
import PartnerRow from './partner.row';
import {FormattedMessage} from 'react-intl';
import * as PartnersEvents from '../events/partners.events';
import PartnerEditPage from './partners.edit.page';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import * as GlobalConfig from '../../../global.config.json';
import Partner from './partner.page';

export default class PartnersTable extends React.Component {
    constructor(properties) {
        super(properties);
        this.state = {
            newPartner: {
                isEditable: true,
                name: '',
                description: ''
            },
            isNewPartnerPresent: false
        };
        this.createNewPartner = this.createNewPartner.bind(this);
        this.editPartner = this.editPartner.bind(this);
    }

    refreshPartners() {
        PartnersEvents.refreshPartners();
    }

    createNewPartner(partner) {
        PartnersEvents.createPartner(partner);
        this.setState({
            isNewPartnerPresent: false
        });
    }

    createPartnerNewRow() {
        this.setState({
            isNewPartnerPresent: true
        });
    }

    render() {
        const partners = this.getPartners();
        const { main } = GlobalConfig.routes;
        const partnersList = partners.map((partner) =>
            <li key={partner.id}>
                <Link to={main.base + main.partners + '/partner/' + partner.id} >
                    <span>{partner.name}</span>
                </Link>
            </li>
        );

        return (
        <Router>
            <div className='main-wrapper container row'>
                <button type='button' className='refresh-button btn btn-default'
                        onClick={this.refreshPartners.bind(this)}>
                    <FormattedMessage id='REFRESH'/></button>
                <button type='button' className='add-partner-button btn btn-default'
                        onClick={this.createPartnerNewRow.bind(this)}>
                    <FormattedMessage id='ADD'/></button>
                <hr/>
                <ul id='partners-list' className='col-md-3'>
                    {partnersList}
                </ul>
                <Route path='/main/partners/partner/:partnerId' component={Partner}/>
                <Route path='/main/partners/new' render={() => (
                        <PartnerEditPage />)}/>
            </div>
        </Router>
        );
    }

    getPartners() {
        let {partners} = this.props;
        if (!partners) {
            partners = [];
        }
        return partners;
    }

    editPartner() {

    }

    getNewPartnerRow() {
        let newPartnerRow = false;
        if (this.state.isNewPartnerPresent) {
            newPartnerRow = <PartnerRow partner={this.state.newPartner} createPartner={this.createNewPartner}/>
        }
        return newPartnerRow;
    }
}