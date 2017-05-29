import React from 'react';
import { FormattedMessage } from 'react-intl';
import NumberFormat from 'react-number-format';

export default class DocumentRow extends React.Component {
    render() {
        const { document } = this.props;
        return (
                <tr>
                    <td>
                        <FormattedMessage id={document.documentType} />
                    </td>
                    <td>{document.enterDate}</td>
                    <td>{document.expectedCommitDate}</td>
                    <td>{document.partnerName}</td>
                    <td>{document.subject}</td>
                    <td><NumberFormat value={document.amount} displayType='text' thousandSeparator={true} /></td>
                    <td>{document.description}</td>
                </tr>
        );
    }
}