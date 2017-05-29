import React from 'react';
import DocumentsTable from './documents.table';
import {FormattedMessage} from 'react-intl';
import DocumentsDispatcher from '../../dispatchers/documents.dispatcher';
import {Link} from 'react-router-dom';
import * as GlobalConfig from '../../../../global.config.json';

export default class DocumentsPage extends React.Component{
    constructor() {
        super();
        this.refreshDocuments = this.refreshDocuments.bind(this);
    }

    refreshDocuments() {
        const event = {
            type: 'RECENT'
        };
        DocumentsDispatcher.dispatch(event);
    }

    render(){
        const { documents } = this.props;
        const {main} = GlobalConfig.routes;
        return(
                <main id="main-section-main" className="col-md-6">
                    <button type='button' className='refresh-button btn btn-default'
                            onClick={this.refreshDocuments}>
                        <FormattedMessage id='REFRESH'/></button>
                    <Link to={main.base + main.documents + '/new'}>
                        <button type='button' className='btn btn-default'><span><FormattedMessage id='ADD'/></span></button>
                    </Link>
                    <h4><FormattedMessage id='RECENT_DOCUMENTS'/></h4>
                    <DocumentsTable documents={documents}/>
                </main>
        );
    }
}
