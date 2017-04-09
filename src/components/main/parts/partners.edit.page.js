import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';



export default class PartnerEditPage extends React.Component {

    constructor(params) {
        super(params);
        this.state = {
        };


        this.initPartner();
    }

    componentDidMount() {
        this.updateName = this.updateName.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.savePartner = this.savePartner.bind(this);
        this.initPartner = this.initPartner.bind(this);
        this.getPartnerFromBase = this.getPartnerFromBase.bind(this);
        this.setEmptyPartner = this.setEmptyPartner.bind(this);
    }

    componentWillUnmount () {

    }

    initPartner(){
        console.log(this.props.partnerId.params.partnerId);
        if (this.props.partnerId){
            this.getPartnerFromBase();
        } else {
            this.setEmptyPartner();
        }
    }

    getPartnerFromBase(){
        if (this.props.partnerId){
            const id = this.props.partnerId.params.partnerId;
            this.setState({
                id,
            });
        }
    }

    setEmptyPartner(){
        this.setState({
            id: 'new'
        });
    }

    updateName(event) {
        this.setState({
            name: event.target.value
        });
    }

    updateDescription(event) {
        this.setState({
            description: event.target.value
        });
    }

    savePartner() {
        this.props.createPartner(this.state);
    }

    render() {
        return (
                <div className="col-md-9">
                    <h3>Works!</h3>
                    <h3>This id: {this.state.id} </h3>
                    <Link to="/" >
                        <button className="button"><FormattedMessage id="SAVE"/></button>
                    </Link>
                    <Link to="/" >
                        <button className="button"><FormattedMessage id="CANCEL"/></button>
                    </Link>
                </div>
        );
    }
}
