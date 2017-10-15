<h1 align="center">
			<a href="https://github.com/klauscfhq/hyper-star-wars">
				<img src="https://cdn.rawgit.com/champloohq/hyper-star-wars/f76cf2d0/media/header.png" alt="Hyper Star Wars" width="100%">
			</a>
</h1>

> 🚀Super awesome, your Hyper terminal shall look.

[![May the Force be will you](https://img.shields.io/badge/May%20the%20Force-be%20with%20you-green.svg)](https://github.com/klauscfhq/hyper-star-wars) [![Build Status](https://travis-ci.org/klauscfhq/hyper-star-wars.svg?branch=master)](https://travis-ci.org/klauscfhq/hyper-star-wars) [![Dependency Status](https://dependencyci.com/github/klauscfhq/hyper-star-wars/badge)](https://dependencyci.com/github/klauscfhq/hyper-star-wars) [![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/klauscfhq/hyper-star-wars) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/klauscfhq/hyper-star-wars) [![Latest version](https://badge.fury.io/gh/klauscfhq%2Fhyper-star-wars.svg)](https://github.com/kklauscfhq/hyper-star-wars/releases) [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/bnb/awesome-hyper)

## Contents

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Options](#options)
- [Star Wars Characters](#star-wars-characters)
- [Related](#related)
- [Team](#team)
- [License](#license)

## Description

24 tailor-made, full fledged Star Wars themes for your Hyper terminal.

All of the wonderful Star Wars backgrounds were created by the amazing [Filipe de Carvalho](http://filipedecarvalho.com) and are part of his [Star Wars - Long Shadow Flat Design Icons](http://filipedecarvalho.com/star-wars-long-shadow-flat-design-icons) project. You can [appreciate his project](https://www.behance.net/gallery/17998561/Star-Wars-Long-Shadow-Flat-Design-Icons) and the rest of his super awesome work on [Behance](https://www.behance.net/creativeflip).

Do you enjoy this project? Maybe you love **Pokémon**? Then, you will also love our [Hyper Pokémon](https://github.com/champloohq/hyper-pokemon) ![](media/pikachu.gif) theme project. Go take a peek.

Come over to our [Gitter](https://gitter.im/klauscfhq/hyper-star-wars) chat to share your thoughts on the project or to just say hi.

Get the backgrounds as 4K HD wallpapers [here](https://www.dropbox.com/sh/il9099epzoyylvw/AABfkYQbuzFJr9yIDaOROZcVa?dl=0).

## Install

### Using the plugin manager - `hpm-cli`

Firstly, ensure you have [Hyper](https://github.com/zeit/hyper/releases) and [Node.js](https://nodejs.org) installed in your system.<br/>
Then simply do the `npm` dance to get `hpm-cli`

```bash
# fire up a terminal and type
$ npm install -g hpm-cli
```

Once done with that, it's time to install the `hyper-star-wars` theme.

```bash
# run the hyper plugin manager
$ hpm install hyper-star-wars
```

### Manually through `.hyper.js`

Add `hyper-star-wars` to the plugins list in your `~/.hyper.js` config file and restart Hyper.

```js
plugins: ['hyper-star-wars']
```

## Usage

Once you have installed `hyper-star-wars`, it's time to set your favorite theme.

Go to your `~/.hyper.js` and add the `StarWarsTheme` settings object below the `colors` object, and define there your theme of choice.

Here is a quick example, where we choose the `yoda` theme, with the `lightsaber` mode activated and a colorful window header.

```js
config: {
	//...
	colors: {
	//...
	},
	StarWarsTheme: {
		character: 'yoda', // Define your favorite star wars character
		lightsaber: 'true', // Activate your theme's lightsaber mode
		unibody: 'false', // Define the color of the Hyper window header
		avatar: 'true'  // Activate your theme's background avatar
	},
	//...
}
```

![](media/example.png)

To get the exact same look, install Google's [`Roboto Mono`](https://fonts.google.com/specimen/Roboto+Mono) font as well as [`oh-my-zsh`](http://ohmyz.sh/) and choose [`pure`](https://github.com/sindresorhus/pure) as your zsh prompt.

## Options

### `character`

Using this option you can choose your Star Wars character theme along with it's tailor-made syntax color.

The assignable values are:

- `character name` - choose any of the [available Star Wars characters](#star-wars-characters) by defining their name.<br/><br/>**i.e.** `character: 'yoda'`, `character: 'darth-vader'`, `character: 'bb8'` **etc**<br/><br/>

- `random` - randomly selects a Star Wars character theme from **all available characters**, each time you fire up a new Hyper terminal session.<br/><br/>
**i.e.** `character: 'random'`<br/><br/>

- `light/dark side` - randomly selects a Star Wars character theme from the **light side** or the **dark side**, each time you fire up a new Hyper terminal session.<br/><br/>
**i.e.** `character: 'light'`, `character: 'dark'`<br/><br/>

- `character array` - randomly selects a Star Wars character theme/theme option from a **defined array** holding **custom multiple themes/theme options**, each time you fire up a new Hyper terminal session. Any from the available Star Wars character **themes** can be chosen!<br/><br/>
**i.e.**
	- `character: ['kylo-ren', 'light', 'dark', 'bb8']`
	- `character: ['yoda', 'chewbacca', 'bb8', 'han-solo', 'c3po']`
	- `character: ['darth-vader', 'stormtrooper', 'spacetrooper', 'ray']`
	- `character: ['random', 'finn', 'boba-fett', 'leia-organa', 'maz-katana']` **etc**<br/><br/>

### `lightsaber`

Activates your theme's `lightsaber` mode, making your terminal's `cursor`, `tab bar` & `scroll bar` glow!

The assignable values are:

- `lightsaber: 'true'` - enable your theme's `lightsaber` mode
- `lightsaber: 'false'` - disable your theme's `lightsaber` mode

Also, completely omitting the `lightsaber` option from your `.hyper.js` will have the same effect as defining it and setting it to `true`. (**default state**)

![](media/lightsaber-example.png)

### `unibody`

Choose whether or not you want the Hyper window header color to be the same as the background Star Wars character theme.

The assignable values are:

- `unibody: 'true'` - choose it for a unibody color theme
- `unibody: 'false'` - go for it if you like your terminal more colorful

In addition, completely omitting the `unibody` option from your `.hyper.js` will have the same effect as defining it and setting it to `true`. (**default state**)

![](media/unibody-example.png)

### `avatar`

Choose whether or not you want the Star Wars character theme `avatar` to be displayed in the background.

The assignable values are:

- `avatar: 'true'` - enable your theme's background `avatar`
- `avatar: 'false'` - disable your theme's background `avatar`

In addition, completely omitting the `avatar` option from your `.hyper.js` will have the same effect as defining it and setting it to `true`. (**default state**)

![](media/avatar-example.png)

## Star Wars Characters

### `darth-vader`

![](media/darth-vader.png)

<details>
<summary>View all the available Star Wars characters</summary>

<br/>

### `yoda`

![](media/yoda.png)

### `stormtrooper`

![](media/stormtrooper.png)

### `r2d2`

![](media/r2d2.png)

### `chewbacca`

![](media/chewbacca.png)

### `snowtrooper`

![](media/snowtrooper.png)

### `kylo-ren`

![](media/kylo-ren.png)

### `bb8`

![](media/bb8.png)

### `obi-wan-kenobi`

![](media/obi-wan-kenobi.png)

### `luke-skywalker-older`

![](media/luke-skywalker-older.png)

### `emperor`

![](media/emperor.png)

### `spacetrooper`

![](media/spacetrooper.png)

### `c3po`

![](media/c3po.png)

### `finn`

![](media/finn.png)

### `boba-fett`

![](media/boba-fett.png)

### `leia-organa`

![](media/leia-organa.png)

### `maz-kanata`

![](media/maz-kanata.png)

### `finn-stormtrooper`

![](media/finn-stormtrooper.png)

### `han-solo`

![](media/han-solo.png)

### `luke-skywalker`

![](media/luke-skywalker.png)

### `rey`

![](media/rey.png)

### `princess-leia`

![](media/princess-leia.png)

### `poe-dameron`

![](media/poe-dameron.png)

### `han-solo-older`

![](media/han-solo-older.png)

<br/>

</details><br/>

## Related

More awesome Hyper plugins.

- [Hyper Pokemon](https://github.com/champloohq/hyper-pokemon) - 🌈 Tailor-made Pokémon themes for your Hyper terminal.

## Team

Meet the team and all the [contributors](https://github.com/champloohq/hyper-star-wars/blob/master/authors.md). <br/>

[![Klaus Sinani](https://avatars.githubusercontent.com/u/12670537?s=130)](https://github.com/klauscfhq) | [![Mario Sinani](https://avatars.githubusercontent.com/u/29512262?s=130)](https://github.com/mariocfhq)
--- | ---
[Klaus Sinani](https://github.com/klauscfhq) | [Mario Sinani](https://github.com/mariocfhq)

## License

[MIT](https://github.com/klauscfhq/hyper-star-wars/blob/master/license.md)
