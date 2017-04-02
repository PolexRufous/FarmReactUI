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
        let description = partner.description;
        let saveButtonName = <FormattedMessage id="CHANGE" />;
        let additionalButton = <Link to={`/partner/${partner.id}`}><button><FormattedMessage id="MORE" /></button></Link>;
        let firstButton = <button>{saveButtonName}</button>;
        if (this.state.isEditable) {
            saveButtonName = <FormattedMessage id="SAVE" />;
            additionalButton = <Link><button><FormattedMessage id="CANCEL" /></button></Link>;
            name = <input name="name" key="name" value={this.state.name} onChange={this.updateName}/>;
            description = <input name="description" value={this.state.description} key="description" onChange={this.updateDescription}/>;
            firstButton = <button onClick={this.savePartner}>{saveButtonName}</button>;
        }
        return (
                <tr>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td>{firstButton}</td>
                    <td>{additionalButton}</td>
                </tr>
        );
    }
}