import React from 'react';
import PartnersTable from './partners.table'
import { FormattedMessage } from 'react-intl';

export default class PartnersPage extends React.Component{
    render(){
        const { partners } = this.props;
        return(
                <section id="right-main-side" className="col-md-12">
                    <h4><FormattedMessage id="PARTNERS" /></h4>
                    <PartnersTable partners={partners}/>
                </section>
        );
    }
}