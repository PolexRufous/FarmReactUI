import React from 'react';
import LeftSide from "./parts/left.side";
import MainSection from "./parts/main.section";
import RightSide from "./parts/right.side";

export default class Main extends React.Component{
    render(){
        return(
            <div className="main-wrapper container row">
                <LeftSide/>
                <MainSection/>
                <RightSide/>
            </div>
        );
    }
}