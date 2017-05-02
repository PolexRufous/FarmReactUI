import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class OperationRow extends React.Component {
    render() {
        const { operation } = this.props;
        return (
            <tr>
                <td>{operation.enterDate}</td>
                <td>{operation.expectedCommitDate}</td>
                <td>{operation.factCommitDate}</td>
                <td>{operation.partner.name}</td>
                <td>
                    <FormattedMessage id={operation.operationType} />
                </td>
                <td>{operation.amount}</td>
            </tr>
        );
    }
}