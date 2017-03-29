import React from 'react';
import OperationRow from "./operation.row"

export default class OperationsTable extends React.Component {
    constructor(properties){
        super(properties);
        this.state = {
            tableHeaderDate: "Дата",
            tableHeaderPartner: "Партнер",
            tableHeaderOperationType: "Операция",
            tableHeaderAmount: "Сумма",
        }
    }
    render() {
        let operations = this.getOperations();

        return (
            <table id="partners-table" className="table">
                <thead>
                <tr>
                    <th>
                        {this.state.tableHeaderDate}
                    </th>
                    <th>
                        {this.state.tableHeaderPartner}
                    </th>
                    <th>
                        {this.state.tableHeaderOperationType}
                    </th>
                    <th>
                        {this.state.tableHeaderAmount}
                    </th>
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

        return operations.map(function(curOperation, index){
            return <OperationRow operation={curOperation} key={index} />
        });
    }
}