import React from 'react';
import LeftSide from "./parts/left.side";
import MainSection from "./parts/main.section";
import RightSide from "./parts/right.side";
import PartnersStore from './stores/partners/partners.store';

export default class Main extends React.Component{
    constructor() {
        super();
        this.getPartners = this.getPartners.bind(this);
        this.state = {
            partners: PartnersStore.getAll()
        }
    }

    componentWillMount(){
        PartnersStore.on("change", this.getPartners);
    }

    componentWillUnmount(){
        PartnersStore.removeListener("change", this.getPartners);
    }

    getPartners(){
        this.setState({
            partners: PartnersStore.getAll()
        });
    }

    render(){
        const { partners } = this.state;
        return(
            <div className="main-wrapper container row">
                <LeftSide/>
                <MainSection/>
                <RightSide partners={partners}/>
            </div>
        );
    }
}