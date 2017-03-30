import React from 'react';
import { FormattedMessage } from 'react-intl';


export default class PartnerRow extends React.Component {
    render() {
        const { partner } = this.props;
        return (
                <tr>
                    <td>{partner.name}</td>
                    <td>{partner.description}</td>
                    <td><button><FormattedMessage id="CHANGE" /></button></td>
                    <td><button><FormattedMessage id="MORE" /></button></td>
                </tr>
        );
    }
}