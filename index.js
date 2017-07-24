const fs = require('fs');
const yaml = require('js-yaml');
const homeDir = require('home-dir');

const path = homeDir('/.hyper_plugins/node_modules/hyper-star-wars/backgrounds/');
const extension = '.png';

exports.decorateConfig = config => {
	let theme;
	let keys;
	let index;
	const getTheme = Array.isArray(config.character) ? config.character[Math.floor(Math.random() * config.character.length)] : config.character;
	let swTheme = getTheme.toLowerCase();
	const unibody = config.unibody;
	const unibodyFlag = unibody !== 'false';

	// Load color palettes from yaml files
	const colorSchemesYml = yaml.safeLoad(
		fs.readFileSync(
			homeDir('/.hyper_plugins/node_modules/hyper-star-wars/color-schemes.yml'),
			'utf8'
		)
	);

	// Determine theme color palette
	if (swTheme === 'random') {
		keys = Object.keys(colorSchemesYml.character);
		index = Math.floor(Math.random() * (keys.length));
		swTheme = keys[index];
	}

	if (Object.prototype.hasOwnProperty.call(colorSchemesYml.character, swTheme)) {
		theme = colorSchemesYml.character[swTheme];
	} else {
		theme = colorSchemesYml.default;
	}

	// Set theme colors
	const primary = (unibodyFlag === true) ? theme.unibody : theme.header;
	const secondary = '#383A42';
	const tertiary = '#383A42';
	const selectedColor = theme.primary;

	const syntax = {
		dark: {
			borderColor: primary,
			cursorColor: secondary,
			foregroundColor: secondary,
			backgroundColor: '#383A42',
			colors: {
				black: tertiary,
				red: secondary,
				green: tertiary,
				yellow: secondary,
				blue: secondary,
				magenta: secondary,
				cyan: secondary,
				white: secondary,
				lightBlack: tertiary,
				lightRed: secondary,
				lightGreen: secondary,
				lightYellow: secondary,
				lightBlue: secondary,
				lightMagenta: secondary,
				lightCyan: secondary,
				lightWhite: secondary
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

	return Object.assign({}, config,
		syntax.dark, {
			termCSS: `
          ${config.termCSS || ''}
          ::selection {
            background: ${selectedColor} !important;
          }
          ::-webkit-scrollbar-thumb {
            background-color: ${secondary};
            -webkit-box-shadow: none;
					}
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
          background-color: ${primary} !important;
        }
        .tabs_nav .tabs_list {
          border-bottom: 0;
        }
        .tabs_nav .tabs_title,
        .tabs_nav .tabs_list .tab_tab {
          color: ${secondary};
          border: 0;
        }
        .tab_icon {
          color: ${secondary};
        }
        .tab_icon:hover {
          background-color: ${secondary};
        }
        .tabs_nav .tabs_list .tab_tab:not(.tab_active) {
          background-color: rgba(0,0,0,0.1);
        }
        .tabs_nav .tabs_list {
          color: ${primary};
        }
        .tabs_nav .tabs_list .tab_active .tab_text {
          border-bottom: 3px solid ${secondary};
        }
        .terms_terms .terms_termGroup .splitpane_panes .splitpane_divider {
          background-color: ${secondary} !important;
        }
      `
		}
	);
};
