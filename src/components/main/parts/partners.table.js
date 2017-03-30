import React from 'react';
import PartnerRow from "./partner.row"
import { FormattedMessage } from 'react-intl';

export default class PartnersTable extends React.Component {
    render() {
        let partners = this.getPartners();

        return (
                <table id="partners-table"  className="table">
                    <thead>
                        <tr>
                            <th><FormattedMessage id="NAME" /></th>
                            <th><FormattedMessage id="DESCRIPTION" /></th>
                            <th colSpan="2"><FormattedMessage id="ACTIONS" /></th>
                        </tr>
                        <tr>
                            <td colSpan="4">
                                <button className="refresh-button"><FormattedMessage id="REFRESH" /></button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4">
                                <button className="add-partner-button"><FormattedMessage id="ADD" /></button>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {partners}
                    </tbody>
                </table>
        );
    }

    getPartners() {
        let {partners} = this.props;
        if (!partners) {
            partners = [];
        }

        return partners.map(function(curPartner, index){
            return <PartnerRow partner={curPartner} key={index} />
        });
    }
}