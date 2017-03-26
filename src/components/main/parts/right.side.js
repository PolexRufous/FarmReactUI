import React from 'react';
import PartnersTable from './partners.table'

export default class RightSide extends React.Component{
    render(){
        return(
                <aside id="right-main-side" className="col-md-3">
                    <h4>This is right side!</h4>
                    <PartnersTable/>
                </aside>
        );
    }
}