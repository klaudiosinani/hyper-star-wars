const fs = require('fs');
const yaml = require('js-yaml');
const homeDir = require('home-dir');

const path = homeDir('/.hyper_plugins/local/hyper-star-wars/backgrounds/');
const extension = '.png';

exports.decorateConfig = config => {
	let theme;
	let keys;
	let index;
	const getTheme = config.theme;
	let swTheme = getTheme.toLowerCase();

	const syntax = {
		dark: {
			borderColor: '#383A42',
			cursorColor: '#383A42',
			foregroundColor: '#383A42',
			backgroundColor: '#383A42',
			colors: {
				black: '#383A42',
				red: '#383A42',
				green: '#383A42',
				yellow: '#383A42',
				blue: '#383A42',
				magenta: '#383A42',
				cyan: '#383A42',
				white: '#383A42',
				lightBlack: '#383A42',
				lightRed: '#383A42',
				lightGreen: '#383A42',
				lightYellow: '#383A42',
				lightBlue: '#383A42',
				lightMagenta: '#383A42',
				lightCyan: '#383A42',
				lightWhite: '#383A42'
			}
		}
	};

	let pathToTheme;
	const assemblePath = path + swTheme + extension;

	if (process.platform === 'win32') {
		pathToTheme = assemblePath.replace(/\\/g, '/');
	} else {
		pathToTheme = assemblePath;
	}


	return Object.assign({}, config, syntax.dark, {
			termCSS: `
          ${config.termCSS || ''}
          x-screen {
            background: transparent !important;
          }
        `,
			css: `
        ${config.css || ''}
        .terms_terms {
          background: url(file://${pathToTheme}) center;
          background-size: cover;
        }
        .header_header, .header_windowHeader {
          background-color: '#383A42' !important;
        }
        .tabs_nav .tabs_list {
          border-bottom: 0;
        }
        .tabs_nav .tabs_title,
        .tabs_nav .tabs_list .tab_tab {
          color: '#383A42';
          border: 0;
        }
        .tab_icon {
          color: '#383A42';
        }
        .tab_icon:hover {
          background-color: '#383A42';
        }
        .tabs_nav .tabs_list .tab_tab:not(.tab_active) {
          background-color: rgba(0,0,0,0.1);
        }
        .tabs_nav .tabs_list {
          color: '#383A42';
        }
        .tabs_nav .tabs_list .tab_active .tab_text {
          border-bottom: 3px solid '#383A42';
        }
        .terms_terms .terms_termGroup .splitpane_panes .splitpane_divider {
          background-color: '#383A42' !important;
        }
      `
		}
	);
};
