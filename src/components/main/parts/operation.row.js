import React from 'react';

export default class OperationRow extends React.Component {
    render() {
        const { operation } = this.props;
        return (
            <tr>
                <td>{operation.date}</td>
                <td>{operation.partner.name}</td>
                <td>{operation.operationType}</td>
                <td>{operation.amount}</td>
            </tr>
        );
    }
}