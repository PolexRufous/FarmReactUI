import React from 'react';
import {FormattedMessage} from 'react-intl';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer-wrapper">
                <h4>
                    <FormattedMessage id='CONTACT_US_HEADER' />
                </h4>
                <p><FormattedMessage id='CONTACT_US_TEXT'/></p>
            </div>
        );
    }
}