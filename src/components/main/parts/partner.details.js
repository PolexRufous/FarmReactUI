import React from "react";
import {FormattedMessage} from "react-intl";
import {HashRouter as Router, Link, Route} from "react-router-dom";
import * as GlobalConfig from "../../../global.config.json";
import PartnersStore from "../stores/partners/partners.store";

export default class PartnerDetails extends React.Component {

    render() {
        const {partner} = this.props;
        console.log(partner);
        return (
            <div>
                <table class="table">
                    <tbody>
                    <tr>
                        <th scope="row"><FormattedMessage id="NAME"/></th>
                        <td>{partner.name}</td>
                    </tr>
                    {listAdreesses(partner)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function listAdreesses(partner) {
    return partner.addresses.map((address, index) => {
        return (
            <tr key={index}>
                <th scope="row"><FormattedMessage id="ADDRESS"/> {index + 1}</th>
                <td>{address.town}</td>
            </tr>
        )
    })
}