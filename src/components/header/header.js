import React from 'react';
import {FormattedMessage} from 'react-intl';

export default class Header extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <a className='navbar-brand' href='#'><FormattedMessage id='NAVIGATION_HEADER'/></a>
                    </div>
                    <ul className='nav navbar-nav'>
                        <li className='active'><a href='#'><FormattedMessage id='NAVIGATION_MENU_MAIN'/></a></li>
                        <li><a href='#'><FormattedMessage id='NAVIGATION_MENU_NOT_MAIN'/></a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}