import React from 'react';
import OperationsPage from './parts/operation/operation.page';
import PartnersPage from './parts/partner/partners.page';
import DocumentsPage from './parts/documents/documents.page';
import PartnersStore from './stores/partners/partners.store';
import OperationsStore from './stores/operations/operations.store';
import DocumentsStore from './stores/documents/documents.store';
import {HashRouter as Router, Route, hashHistory} from 'react-router-dom';
import MainNavigation from './parts/main.navigation';
import * as GlobalConfig from '../../global.config.json';

export default class Main extends React.Component {
    constructor() {
        super();
        this.getPartners = this.getPartners.bind(this);
        this.getOperations = this.getOperations.bind(this);
        this.getRecentDocuments = this.getRecentDocuments.bind(this);
        this.state = {
            partners: PartnersStore.getAll(),
            operations: OperationsStore.getAll(),
            documents: DocumentsStore.getStoredDocuments()
        }
    }

    componentWillMount() {
        PartnersStore.on("change", this.getPartners);
        OperationsStore.on("change", this.getOperations);
        DocumentsStore.on("change", this.getRecentDocuments);
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

    getRecentDocuments() {
        this.setState({
            documents: DocumentsStore.getStoredDocuments()
        });
    }

    render() {
        const {partners} = this.state;
        const {documents} = this.state;
        const { main } = GlobalConfig.routes;
        return (
            <Router history={hashHistory}>
                <div className="main-wrapper container row">
                    <MainNavigation/>
                    <Route exact={true} path={main.base} render={({match}) => (
                            <div>
                                <h2>Here will be some grouped information!</h2>
                            </div>
                    )}/>
                    <Route exact={true} path={main.base + main.documents} render={({match}) => (
                        <div>
                            <DocumentsPage documents={documents}/>
                        </div>
                        )} />
                    <Route path={main.base + main.partners} render={({match}) => (
                            <div>
                                <PartnersPage partners={partners}/>
                            </div>
                    )} />
                </div>
            </Router>
        );
    }
}