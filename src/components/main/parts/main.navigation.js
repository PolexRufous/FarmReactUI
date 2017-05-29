import React from 'react';
import * as GlobalConfig from '../../../global.config.json';
import {FormattedMessage} from 'react-intl';

export default class MainNavigation extends React.Component{
    render(){
        const { main } = GlobalConfig.routes;
        return(
                <nav id="main-navigation" className="navbar navbar-default">
                    <div className='container-fluid'>
                        <div className='navbar-header'>
                            <a className='navbar-brand' href={"#" + main.base}>
                                <span className="glyphicon glyphicon-home" aria-hidden="true">&nbsp;</span>
                                <FormattedMessage id='MAIN_NAV_BASE'/>
                            </a>
                        </div>
                        <ul className='nav navbar-nav'>
                            <li>
                                <a href={"#" + main.base + main.documents}>
                                    <span className="glyphicon glyphicon-eur" aria-hidden="true">&nbsp;</span>
                                    <FormattedMessage id='MAIN_NAV_DOCUMENTS_EXT'/>

                                </a>
                            </li>
                            <li>
                                <a href={"#" + main.base + main.partners}>
                                    <span className="glyphicon glyphicon-user" aria-hidden="true">&nbsp;</span>
                                    <FormattedMessage id='MAIN_NAV_PARTNERS'/>
                                </a>
                            </li>
                            <li className="disabled">
                                <a href="#">
                                    <FormattedMessage id='MAIN_NAV_SHIPS_EXPECTED'/>
                                </a>
                            </li>
                            <li className="disabled">
                                <a href="#">
                                    <FormattedMessage id='MAIN_NAV_SHIPS_LIABILITIES'/>
                                </a>
                            </li>
                            <li className="disabled">
                                <a href="#">
                                    <FormattedMessage id='MAIN_NAV_PAYMENTS_EXPECTED'/>
                                </a>
                            </li>
                            <li className="disabled">
                                <a href="#">
                                    <FormattedMessage id='MAIN_NAV_PAYMENTS_LIABILITIES'/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
        );
    }
}
