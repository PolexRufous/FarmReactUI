import React from 'react';
import OperationRow from "./operation.row"
import { FormattedMessage } from 'react-intl';

export default class OperationsTable extends React.Component {
    render() {
        let operations = this.getOperations();

        return (
            <table id="partners-table" className="table">
                <thead>
                <tr>
                    <th><FormattedMessage id="ENTER_DATE" /></th>
                    <th><FormattedMessage id="EXPECTED_COMMIT_DATE" /></th>
                    <th><FormattedMessage id="FACT_COMMIT_DATE" /></th>
                    <th><FormattedMessage id="PARTNER" /></th>
                    <th><FormattedMessage id="OPERATION" /></th>
                    <th><FormattedMessage id="AMOUNT" /></th>
                </tr>
                </thead>
                <tbody>
                    {operations}
                </tbody>
            </table>
        );
    }

    getOperations() {
        let {operations} = this.props;
        if (!operations) {
            operations = [];
        }

        return operations.map((curOperation, index) => {
            return <OperationRow operation={curOperation} key={index} />
        });
    }
}