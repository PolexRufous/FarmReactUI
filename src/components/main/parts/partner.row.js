import React from 'react';

export default class PartnerRow extends React.Component {
    render() {
        const { partner } = this.props;
        return (
                <tr>
                    <td>{partner.name}</td>
                    <td>{partner.description}</td>
                    <td><button>Изменить</button></td>
                    <td><button>Дополнительно</button></td>
                </tr>
        );
    }
}