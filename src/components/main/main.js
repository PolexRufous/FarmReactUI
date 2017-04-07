import React from 'react';
import LeftSide from "./parts/left.side";
import MainSection from "./parts/main.section";
import RightSide from "./parts/right.side";
import PartnersStore from './stores/partners/partners.store';
import OperationsStore from './stores/operations/operations.store'
import {HashRouter as Router, Route, hashHistory} from 'react-router-dom';
import PartnerEditPage from '../profile/components/partners.edit.page';

export default class Main extends React.Component {
    constructor() {
        super();
        this.getPartners = this.getPartners.bind(this);
        this.getOperations = this.getOperations.bind(this);
        this.state = {
            partners: PartnersStore.getAll(),
            operations: OperationsStore.getAll()
        }
    }

    componentWillMount() {
        PartnersStore.on("change", this.getPartners);
        OperationsStore.on("change", this.getOperations);
    }

    componentWillUnmount() {
        PartnersStore.removeListener("change", this.getPartners);
        OperationsStore.removeListener("change", this.getOperations);
    }

    getPartners() {
        this.setState({
            partners: PartnersStore.getAll()
        });
    }

    getOperations() {
        this.setState({
            operations: OperationsStore.getAll()
        });
    }

    render() {
        const {partners} = this.state;
        const {operations} = this.state;
        return (
            <Router history={hashHistory}>
                <div className="main-wrapper container row">
                    <Route exact={true} path="/" render={({match}) => (
                        <div>
                            <LeftSide/>
                            <MainSection operations={operations}/>
                            <RightSide partners={partners}/>
                        </div>
                        )} />
                    <Route path="/partner/:partnerId" render={({match}) => (
                        <PartnerEditPage partnerId={match}/>)}/>
                </div>
            </Router>
        );
    }
}