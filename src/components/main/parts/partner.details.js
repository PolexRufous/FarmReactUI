import React from "react";
import {FormattedMessage} from "react-intl";
import {Link} from "react-router-dom";

export default class PartnerDetails extends React.Component {
    constructor(props) {
        super(props);
        let {partner} = this.props;
        this.state = {partner: partner};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let address = event.target.value;
        let partnerIndex = event.target.attributes.id.value;
        let {partner} = this.state;

        if (partner && partner.addresses && address) {
            partner.addresses[partnerIndex] = { id: partnerIndex, town: address};
            this.setState({
                partner: partner
            })
        }
    }

    render() {
        const {partner} = this.state;
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
    if (!partner || !partner.addresses) {
        return (
            <tr><td colSpan="2"><FormattedMessage id='NO_ADDRESSES_TO_SHOW'/></td></tr>
        )
    }
    return partner.addresses.map((address, index) => {
        return (
            <tr key={index}>
                <th scope="row"><FormattedMessage id="ADDRESS"/> {index + 1}</th>
                <td><input id={index} value={address.town} readOnly onChange={thisComponent.handleChange} type="text"/>
                </td>
            </tr>
        )
    })
}