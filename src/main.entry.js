import React from 'react';
import ReactDOM from 'react-dom';
import * as GlobalConfig from './global.config.json';

import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

const header = document.getElementById(GlobalConfig.headerClassName);
const main = document.getElementById(GlobalConfig.mainClassName);
const footer = document.getElementById(GlobalConfig.footerClassName);

ReactDOM.render(<Header/>, header);
ReactDOM.render(<Main/>, main);
ReactDOM.render(<Footer/>, footer);