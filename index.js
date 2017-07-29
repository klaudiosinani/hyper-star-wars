const fs = require('fs');
const yaml = require('js-yaml');
const homeDir = require('home-dir');

const path = homeDir('/.hyper_plugins/node_modules/hyper-star-wars/backgrounds/');
const extension = '.png';

exports.decorateConfig = config => {
	let theme;
	let keys;
	let index;
	const getTheme = Array.isArray(config.StarWarsTheme.character) ? config.StarWarsTheme.character[Math.floor(Math.random() * config.StarWarsTheme.character.length)] : config.StarWarsTheme.character;
	let starWarsTheme = getTheme.toLowerCase();
	const unibody = config.StarWarsTheme.unibody;
	const unibodyFlag = unibody !== 'false';
	const lightsaber = config.StarWarsTheme.lightsaber;
	const lightsaberFlag = lightsaber !== 'false';

	// Load color palettes from yaml files
	const charactersYml = yaml.safeLoad(
		fs.readFileSync(
			homeDir('/.hyper_plugins/node_modules/hyper-star-wars/characters.yml'),
			'utf8'
		)
	);

	// Determine theme color palette
	if (starWarsTheme === 'random') {
		keys = Object.keys(charactersYml.characters);
		index = Math.floor(Math.random() * (keys.length));
		starWarsTheme = keys[index];
	}

	if (Object.prototype.hasOwnProperty.call(charactersYml.characters, starWarsTheme)) {
		theme = charactersYml.characters[starWarsTheme];
	} else {
		theme = charactersYml.default.yoda;
	}

	// Set theme colors
	const primary = (unibodyFlag === true) ? theme.unibody : theme.header;
	const fontColor = theme.font;
	const tabsColor = theme.tabs;
	const selectedColor = theme.header;
	const themeBlack = theme.black;
	const themeRed = theme.red;
	const themeGreen = theme.green;
	const themeYellow = theme.yellow;
	const themeBlue = theme.blue;
	const themeMagenta = theme.magenta;
	const themeCyan = theme.cyan;
	const themeWhite = theme.white;
	const themeLightBlack = theme.lightBlack;
	const themeLightRed = theme.lightRed;
	const themeLightGreen = theme.lightGreen;
	const themeLightYellow = theme.lightYellow;
	const themeLightBlue = theme.lightBlue;
	const themeLightMagenta = theme.lightMagenta;
	const themeLightCyan = theme.lightCyan;
	const themeLightWhite = theme.lightWhite;

	const syntax = {
		scheme: {
			borderColor: primary,
			cursorColor: fontColor,
			foregroundColor: fontColor,
			backgroundColor: tabsColor,
			colors: {
				black: themeBlack,
				red: themeRed,
				green: themeGreen,
				yellow: themeYellow,
				blue: themeBlue,
				magenta: themeMagenta,
				cyan: themeCyan,
				white: themeWhite,
				lightBlack: themeLightBlack,
				lightRed: themeLightRed,
				lightGreen: themeLightGreen,
				lightYellow: themeLightYellow,
				lightBlue: themeLightBlue,
				lightMagenta: themeLightMagenta,
				lightCyan: themeLightCyan,
				lightWhite: themeLightWhite
			}
		}
	};

	let pathToTheme;
	const assemblePath = path + starWarsTheme + extension;

	// Lightsaber effect settings
	const cursorSaber = (lightsaberFlag === true) ? '0 0 10px 2px ' + fontColor : '';
	const barSaber = (lightsaberFlag === true) ? '0 0 10px ' + fontColor : '';

	if (process.platform === 'win32') {
		pathToTheme = assemblePath.replace(/\\/g, '/');
	} else {
		pathToTheme = assemblePath;
	}

	return Object.assign({}, config,
		syntax.scheme, {
			termCSS: `
          ${config.termCSS || ''}
					.cursor-node {
						-webkit-box-shadow: ${cursorSaber};
					}
          ::selection {
            background: ${selectedColor} !important;
          }
          ::-webkit-scrollbar-thumb {
            background-color: ${fontColor};
						-webkit-box-shadow: ${barSaber};
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
          color: ${fontColor};
          border: 0;
        }
        .tab_icon {
          color: ${fontColor};
        }
        .tab_icon:hover {
          background-color: ${fontColor};
        }
        .tabs_nav .tabs_list .tab_tab:not(.tab_active) {
          background-color: rgba(0,0,0,0.1);
        }
        .tabs_nav .tabs_list {
          color: ${primary};
        }
		.tab_tab::before {
	      content: '';
	      position: absolute;
	      bottom: 0;
	      left: 0;
	      right: 0;
	      height: 4px;
	      background-color: ${fontColor};
	      transform: scaleX(0);
	      transition: none;
				-webkit-box-shadow: ${barSaber};
		}
	    .tab_tab.tab_active::before {
	      transform: scaleX(1);
	      transition: all 400ms cubic-bezier(0.0, 0.0, 0.2, 1)
	    }
        .terms_terms .terms_termGroup .splitpane_panes .splitpane_divider {
          background-color: ${fontColor} !important;
        }
      `
		}
	);
};
