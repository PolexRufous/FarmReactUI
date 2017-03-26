import React from 'react';
import ReactDOM from 'react-dom';
import * as GlobalConfig from './global.config.json';

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

import * as BootstrapCssTheme from '../node_modules/bootstrap-css-only/css/bootstrap-theme.min.css';
import * as BootstrapCss from '../node_modules/bootstrap-css-only/css/bootstrap.min.css';
import * as BootstrapGrid from '../node_modules/bootstrap-grid-only/bootstrap.css';


const header = document.getElementById(GlobalConfig.headerClassName);
const main = document.getElementById(GlobalConfig.mainClassName);
const footer = document.getElementById(GlobalConfig.footerClassName);

ReactDOM.render(<Header/>, header);
ReactDOM.render(<Main/>, main);
ReactDOM.render(<Footer/>, footer);