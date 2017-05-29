import React from 'react';
import DocumentRow from "./document.row";
import { FormattedMessage } from 'react-intl';

export default class DocumentTable extends React.Component {

    constructor(){
        super();
        this.getDocuments = this.getDocuments.bind(this);
    }

    getDocuments() {
        let {documents} = this.props;
        if (!documents) {
            documents = [];
        }

        return documents.map((curDocument, index) => {
            return <DocumentRow document={curDocument} key={'doc_' + index} />
        });
    }

    render(){
        let documents = this.getDocuments();

        return (
                <table id="documents-table" className="table">
                    <thead>
                    <tr>
                        <th><FormattedMessage id="DOCUMENT_TYPE" /></th>
                        <th><FormattedMessage id="ENTER_DATE" /></th>
                        <th><FormattedMessage id="EXPECTED_COMMIT_DATE" /></th>
                        <th><FormattedMessage id="PARTNER" /></th>
                        <th><FormattedMessage id="SUBJECT" /></th>
                        <th><FormattedMessage id="AMOUNT" /></th>
                        <th><FormattedMessage id="DESCRIPTION" /></th>
                    </tr>
                    </thead>
                    <tbody>
                    {documents}
                    </tbody>
                </table>
        );
    }
}