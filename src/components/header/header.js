import React from 'react';
import * as GlobalConfig from '../../global.config.json';
import {FormattedMessage} from 'react-intl';

export default class Header extends React.Component {
    render() {
        const { main } = GlobalConfig.routes;
        return (
            <nav className='navbar navbar-default navbar-static-top'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <a className='navbar-brand' href='#'><FormattedMessage id='NAVIGATION_HEADER'/></a>
                    </div>
                    <ul className='nav navbar-nav'>
                        <li className='active'><a href={'#' + main.base}><FormattedMessage id='NAVIGATION_MENU_MAIN'/></a></li>
                        <li className='disabled'><a href='#'><FormattedMessage id='NAVIGATION_MENU_NOT_MAIN'/></a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}