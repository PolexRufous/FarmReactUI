import React from 'react';
import LeftSide from "./parts/left.side";
import MainSection from "./parts/main.section";
import RightSide from "./parts/right.side";
import PartnersStore from './stores/partners/partners.store';
import OperationsStore from './stores/operations/operations.store'

export default class Main extends React.Component{
    constructor() {
        super();
        this.getPartners = this.getPartners.bind(this);
        this.getOperations = this.getOperations.bind(this);
        this.state = {
            partners: PartnersStore.getAll(),
            operations: OperationsStore.getAll()
        }
    }

    componentWillMount(){
        PartnersStore.on("change", this.getPartners);
        OperationsStore.on("change", this.getOperations);
    }

    componentWillUnmount(){
        PartnersStore.removeListener("change", this.getPartners);
        OperationsStore.removeListener("change", this.getOperations);
    }

    getPartners(){
        this.setState({
            partners: PartnersStore.getAll()
        });
    }

    getOperations(){
        this.setState({
            operations: OperationsStore.getAll()
        });
    }

    render(){
        const { partners } = this.state;
        const { operations } = this.state;
        return(
            <div className="main-wrapper container row">
                <LeftSide/>
                <MainSection operations={operations}/>
                <RightSide partners={partners}/>
            </div>
        );
    }
}