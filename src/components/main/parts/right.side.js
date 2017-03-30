import React from 'react';
import PartnersTable from './partners.table'
import { FormattedMessage } from 'react-intl';

export default class RightSide extends React.Component{
    render(){
        const { partners } = this.props;
        return(
                <aside id="right-main-side" className="col-md-3">
                    <h4><FormattedMessage id="PARTNERS" /></h4>
                    <PartnersTable partners={partners}/>
                </aside>
        );
    }
}