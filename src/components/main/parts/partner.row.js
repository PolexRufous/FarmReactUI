import React from 'react';
import { FormattedMessage } from 'react-intl';


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
        let additionalButtonName = <FormattedMessage id="MORE" />;
        let firstButton = <button>{saveButtonName}</button>;
        if (this.state.isEditable) {
            saveButtonName = <FormattedMessage id="SAVE" />;
            additionalButtonName = <FormattedMessage id="CANCEL" />;
            name = <input name="name" key="name" value={this.state.name} onChange={this.updateName}/>;
            description = <input name="description" value={this.state.description} key="description" onChange={this.updateDescription}/>;
            firstButton = <button onClick={this.savePartner}>{saveButtonName}</button>;
        }
        return (
                <tr>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td>{firstButton}</td>
                    <td><button>{additionalButtonName}</button></td>
                </tr>
        );
    }
}