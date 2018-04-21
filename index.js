'use strict';
const fs = require('fs');
const path = require('path');
const color = require('color');
const yaml = require('js-yaml');

const filepaths = {
  backgrounds: path.resolve(__dirname, 'backgrounds')
};

const colorSchemes = {
  characters: path.resolve(__dirname, 'characters.yml'),
  sides: path.resolve(__dirname, 'sides.yml')
};

function getThemes() {
  const themes = {};
  Object.keys(colorSchemes).forEach(category => {
    Object.assign(themes, yaml.safeLoad(fs.readFileSync(colorSchemes[category], 'utf8')));
  });
  return themes;
}

function getUserOptions(configObj) {
  const config = configObj.StarWarsTheme;
  return Object.assign({}, {
    get avatar() {
      return (config.avatar || 'true') !== 'false';
    },
    get character() {
      if (Array.isArray(config.character)) {
        return config.character[Math.floor(Math.random() * config.character.length)];
      }
      return config.character || 'yoda';
    },
    get lightsaber() {
      return (config.lightsaber || 'false') === 'true';
    },
    get unibody() {
      return (config.unibody || 'true') !== 'false';
    }
  });
}

function getRandomTheme(category) {
  const index = Math.floor(Math.random() * (Object.keys(category).length));
  const name = Object.keys(category)[index];
  return [name, category[name]];
}

function getThemeColors(theme) {
  const themes = getThemes();
  const name = theme.trim().toLowerCase();
  if (name === 'random') {
    return getRandomTheme(themes.characters);
  }
  if (Object.prototype.hasOwnProperty.call(themes, name)) {
    // Choose a random theme from the given category -- i.e. `light`
    return getRandomTheme(themes[name]);
  }
  if (Object.prototype.hasOwnProperty.call(themes.characters, name)) {
    // Return the requested character theme -- i.e. `bb8`
    return [name, themes.characters[name]];
  }
  // Got non-existent theme name thus resolve to default
  return ['yoda', themes.characters.yoda];
}

function getImagePath(character) {
  const imagePath = [];
  imagePath.push(...[path.join(filepaths.backgrounds, character), '.png']);
  if (process.platform === 'win32') {
    return imagePath.join('').replace(/\\/g, '/');
  }
  return imagePath.join('');
}

exports.decorateConfig = config => {
  const options = getUserOptions(config);
  const [themeName, colors] = getThemeColors(options.character);
  const imagePath = getImagePath(themeName);

  // Set theme colors
  const primary = options.unibody ? colors.unibody : colors.header;
  const fontColor = colors.font;
  const unibodyColor = colors.unibody;
  const activeTab = colors.tabs;
  const tab = color(activeTab).darken(0.1);
  const selection = color(colors.header).alpha(0.5).string();
  const transparent = color(primary).alpha(0).string();

  // Set lightsaber
  const barSaber = options.lightsaber ? `0 0 10px ${fontColor}` : '';

  // Set background
  const themeAvatar = `url("file://${imagePath}") center;`;
  const backgroundContent = options.avatar ? themeAvatar : unibodyColor;

  const scheme = {
    backgroundColor: transparent,
    borderColor: primary,
    cursorColor: fontColor,
    foregroundColor: fontColor,
    selectionColor: selection,
    colors: {
      black: colors.black,
      red: colors.red,
      green: colors.green,
      yellow: colors.yellow,
      blue: colors.blue,
      magenta: colors.magenta,
      cyan: colors.cyan,
      white: colors.white,
      lightBlack: colors.lightBlack,
      lightRed: colors.lightRed,
      lightGreen: colors.lightGreen,
      lightYellow: colors.lightYellow,
      lightBlue: colors.lightBlue,
      lightMagenta: colors.lightMagenta,
      lightCyan: colors.lightCyan,
      lightWhite: colors.lightWhite
    }
  };

  return Object.assign({}, config, scheme, {
    termCSS: `
      ${config.termCSS || ''}
      ::-webkit-scrollbar-thumb {
        background-color: ${fontColor};
        -webkit-box-shadow: ${barSaber};
      }
    `,
    css: `
      ${config.css || ''}
      .terms_terms {
        background: ${backgroundContent};
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
        background-color: ${tab};
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
  });
};
