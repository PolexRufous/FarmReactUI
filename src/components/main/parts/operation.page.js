import React from 'react';
import OperationsTable from './operations.table'
import {FormattedMessage} from 'react-intl';

export default class OperationsPage extends React.Component{
    render(){
        const { operations } = this.props;
        return(
                <main id="main-section-main" className="col-md-6">
                    <h4><FormattedMessage id='LATEST_OPERATIONS'/></h4>
                    <OperationsTable operations={operations}/>
                </main>
        );
    }
}
