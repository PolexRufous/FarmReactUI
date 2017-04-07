import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';


export default class PartnerRow extends React.Component {

    constructor(props){
        super(props);
        if (props.partner.isEditable){
            this.state = {
                isEditable: true,
                name: 'Enter name',
                description: 'Enter description'
            }

        } else {
            this.state = {}
        }
        this.updateName = this.updateName.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.savePartner = this.savePartner.bind(this);

    }

    updateName(event){
        this.setState({
            name: event.target.value
        });
    }

    updateDescription(event){
        this.setState({
            description: event.target.value
        });
    }

    savePartner(){
        this.props.createPartner(this.state);
    }

    render() {
        const { partner } = this.props;
        let name = partner.name;
        let partnerLabel = <Link to={`/partner/${partner.id}`}>{name}</Link>;
        return (
                <tr>
                    <td>{partnerLabel}</td>
                </tr>
        );
    }
}