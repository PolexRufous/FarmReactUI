import React from 'react';
import {FormattedMessage} from 'react-intl';

export default class LeftSide extends React.Component{
    render(){
        return(
                <aside id="left-main-side" className="col-md-3">
                    <h4><FormattedMessage id='LEFT_SIDE_HEADER'/></h4>
                    <p><FormattedMessage id='LEFT_SIDE_TEXT'/></p>
                </aside>
        );
    }
}