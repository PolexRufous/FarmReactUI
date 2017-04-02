import React from 'react';
import ReactDOM from 'react-dom';
import * as GlobalConfig from './global.config.json';
import { IntlProvider, addLocaleData } from 'react-intl';

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import ru from './i18n/ru';

import * as BootstrapCssTheme from '../node_modules/bootstrap-css-only/css/bootstrap-theme.min.css';
import * as BootstrapCss from '../node_modules/bootstrap-css-only/css/bootstrap.min.css';
import * as BootstrapGrid from '../node_modules/bootstrap-grid-only/bootstrap.css';

addLocaleData([ru]);
const language = (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage;
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
const messages = ru.messages;


const header = document.getElementById(GlobalConfig.headerClassName);
const main = document.getElementById(GlobalConfig.mainClassName);
const footer = document.getElementById(GlobalConfig.footerClassName);

ReactDOM.render(<IntlProvider locale={languageWithoutRegionCode} messages={messages}><Header /></IntlProvider>,header);
ReactDOM.render(<IntlProvider locale={languageWithoutRegionCode} messages={messages}><Main /></IntlProvider>,main);
ReactDOM.render(<IntlProvider locale={languageWithoutRegionCode} messages={messages}><Footer /></IntlProvider>,footer);