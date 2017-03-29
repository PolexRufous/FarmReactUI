import React from 'react';
import OperationsTable from './operations.table'

export default class MainSection extends React.Component{
    render(){
        const { operations } = this.props;
        return(
                <main id="main-section-main" className="col-md-6">
                    <h4>Последние операции</h4>
                    <OperationsTable operations={operations}/>
                </main>
        );
    }
}
