import React from 'react';

export default class PartnersTable extends React.Component {
    constructor(properties){
        super(properties);
        this.state = {
            tableHeaderName: "Имя",
            tableHeaderDescription: "Описаине",
            tableHeaderActions: "Действия",
            buttonRefreshName: "Обновить",
            buttonAddName: "Добавить"
        }
    }
    render() {
        return (
                <table id="partners-table">
                    <tr>
                        <th>
                            {this.state.tableHeaderName}
                        </th>
                        <th>
                            {this.state.tableHeaderDescription}
                        </th>
                        <th colspan="2">
                            {this.state.tableHeaderActions}
                        </th>
                    </tr>
                    <tr>
                        <td colspan="4">
                            <button class="refresh-button">{this.state.buttonRefreshName}</button>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4">
                            <button class="add-partner-button">{this.state.buttonAddName}</button>
                        </td>
                    </tr>
                </table>
        );
    }
}