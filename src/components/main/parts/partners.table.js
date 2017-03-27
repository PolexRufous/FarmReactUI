import React from 'react';
import PartnerRow from "./partner.row"

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
        let { partners } = this.props;
        if (!partners) {
            partners = [];
        }

        return (
                <table id="partners-table">
                    <thead>
                        <tr>
                            <th>
                                {this.state.tableHeaderName}
                            </th>
                            <th>
                                {this.state.tableHeaderDescription}
                            </th>
                            <th colSpan="2">
                                {this.state.tableHeaderActions}
                            </th>
                        </tr>
                        <tr>
                            <td colSpan="4">
                                <button className="refresh-button">{this.state.buttonRefreshName}</button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4">
                                <button className="add-partner-button">{this.state.buttonAddName}</button>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                    {partners.map((curPartner, i) => {
                        return <PartnerRow partner={curPartner} key={i}/>
                    })}
                    </tbody>
                </table>
        );
    }
}