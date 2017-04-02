import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PartnerRow from "./partner.row";
import PartnerEditPage from './partners.edit.page';
import { FormattedMessage } from 'react-intl';
import * as PartnersEvents from '../events/partners.events';

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

    refreshPartners(){
        PartnersEvents.refreshPartners();
    }

    createNewPartner(partner){
        PartnersEvents.createPartner(partner);
        this.setState({
            isNewPartnerPresent: false
        });
    }

    createPartnerNewRow(){
        this.setState({
            isNewPartnerPresent: true
        });
    }

    render() {
        let partners = this.getPartners();
        let newPartnerRow = this.getNewPartnerRow();

        return (
                <Router>
                    <div>
                    <Route exact={true} path="/" render={() => (
                        <table id="partners-table"  className="table">
                            <thead>
                                <tr>
                                    <th><FormattedMessage id="NAME" /></th>
                                    <th><FormattedMessage id="DESCRIPTION" /></th>
                                    <th colSpan="2"><FormattedMessage id="ACTIONS" /></th>
                                </tr>
                                <tr>
                                    <td colSpan="4">
                                        <button className="refresh-button"
                                                onClick={this.refreshPartners.bind(this)}>
                                            <FormattedMessage id="REFRESH" /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="4">
                                        <button className="add-partner-button"
                                                onClick={this.createPartnerNewRow.bind(this)}>
                                            <FormattedMessage id="ADD" /></button>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                            {newPartnerRow}
                            {partners}
                            </tbody>
                        </table>
                    )}>
                    </Route>
                    <Route path="/partner/:partnerId" render={({match}) => (
                            <PartnerEditPage partnerId={match}/>)}/>
                    </div>
                </Router>

        );
    }

    getPartners() {
        let {partners} = this.props;
        if (!partners) {
            partners = [];
        }

        return partners.map(function(curPartner, index){
            return <PartnerRow partner={curPartner} key={index} edit="this.editPartner" />
        });
    }

    editPartner(){

    }

    getNewPartnerRow() {
        let newPartnerRow = false;
        if(this.state.isNewPartnerPresent){
            newPartnerRow =  <PartnerRow partner={this.state.newPartner} createPartner={this.createNewPartner}/>
        }
        return newPartnerRow;
    }
}