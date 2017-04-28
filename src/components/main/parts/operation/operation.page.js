import React from 'react';
import OperationsTable from './operations.table'
import {FormattedMessage} from 'react-intl';
import OperationsDispatcher from '../../dispatchers/operatins.dispatcher'
import {Link} from 'react-router-dom';
import * as GlobalConfig from '../../../../global.config.json';

export default class OperationsPage extends React.Component{
    constructor() {
        super();

        this.refreshOperations = this.refreshOperations.bind(this);
    }

    refreshOperations() {
        const action = {
            type: 'REFRESH'
        };
        OperationsDispatcher.dispatch(action);
    }


    render(){
        const { operations } = this.props;
        const {main} = GlobalConfig.routes;
        return(
                <main id="main-section-main" className="col-md-6">
                    <button type='button' className='refresh-button btn btn-default'
                            onClick={this.refreshOperations.bind(this)}>
                        <FormattedMessage id='REFRESH'/></button>
                    <Link to={main.base + main.operations_cash + '/new'}>
                        <button type='button' className='btn btn-default'><span><FormattedMessage id='ADD'/></span></button>
                    </Link>
                    <h4><FormattedMessage id='LATEST_OPERATIONS'/></h4>
                    <OperationsTable operations={operations}/>
                </main>
        );
    }
}
