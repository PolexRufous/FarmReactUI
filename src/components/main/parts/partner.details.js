import React from "react";
import {FormattedMessage} from "react-intl";
import {HashRouter as Router, Link, Route} from "react-router-dom";
import * as GlobalConfig from "../../../global.config.json";
import PartnersStore from "../stores/partners/partners.store";

export default class PartnerDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {partner: props.partner};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        //TODO: update partner
    }

    render() {
        const {partner} = this.props;
        return (
            <div>
                <table className="table">
                    <tbody>
                    {listAddresses(partner, this)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function listAddresses(partner, thisComponent) {
    return partner.addresses.map((address, index) => {
        return (
            <tr key={index}>
                <th scope="row"><FormattedMessage id="ADDRESS"/> {index + 1}</th>
                <td><input id={index} value={address.town} readOnly onChange={thisComponent.handleChange}  type="text"/></td>
            </tr>
        )
    })
}