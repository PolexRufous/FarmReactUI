import React from 'react';
import PartnerRow from "./partner.row";
import {FormattedMessage} from 'react-intl';
import * as PartnersEvents from '../events/partners.events';
import PartnerEditPage from './partners.edit.page';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import * as GlobalConfig from '../../../global.config.json';

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
                <Link to={main.base + main.partners + "/id/" + partner.id} >
                    {partner.name}
                </Link>
            </li>
        );

        return (
        <Router>
            <div className="main-wrapper container row">
                <button className="refresh-button"
                        onClick={this.refreshPartners.bind(this)}>
                    <FormattedMessage id="REFRESH"/></button>
                <button className="add-partner-button"
                        onClick={this.createPartnerNewRow.bind(this)}>
                    <FormattedMessage id="ADD"/></button>
                <hr/>
                <ul id="partners-list" className="col-md-3">
                    {partnersList}
                </ul>
                <Route path="/main/partners/id/:partnerId" component={Partner}/>
                <Route path="/main/partners/new" render={() => (
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

/*        return partners.map(function (curPartner, index) {
            return <PartnerRow partner={curPartner} key={index} edit="this.editPartner"/>
        });*/
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

const Partner = ({ match }) => (
        <div className="col-md-9">
            <h3>Works!</h3>
            <h3>This id: {match.params.partnerId} </h3>
            <Link to="/" >
                <button className="button"><FormattedMessage id="SAVE"/></button>
            </Link>
            <Link to="/" >
                <button className="button"><FormattedMessage id="CANCEL"/></button>
            </Link>
        </div>
);