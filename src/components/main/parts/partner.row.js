import React from 'react';
import { FormattedMessage } from 'react-intl';


export default class PartnerRow extends React.Component {
    render() {
        const { partner } = this.props;
        let name = partner.name;
        let description = partner.description;
        let saveButtonName = <FormattedMessage id="CHANGE" />;
        let additionalButtonName = <FormattedMessage id="MORE" />;
        if (partner.isEditable) {
            saveButtonName = <FormattedMessage id="SAVE" />;
            additionalButtonName = <FormattedMessage id="CANCEL" />;
            name = <input name="name" value={partner.name}/>;
            description = <input name="description" value={partner.description} />;
        }
        return (
                <tr>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td><button>{saveButtonName}</button></td>
                    <td><button>{additionalButtonName}</button></td>
                </tr>
        );
    }
}