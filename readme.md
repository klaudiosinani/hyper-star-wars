<h1 align="center">
			<a href="https://github.com/hyper-pokemon/hyper-star-wars">
				<img src="https://cdn.rawgit.com/hyper-pokemon/hyper-star-wars/8493363d/media/header.png" alt="Hyper Star Wars" width="100%">
			</a>
</h1>

> 🌟🚀Super awesome, your Hyper terminal shall look.

[![May the Force be will you](https://img.shields.io/badge/May%20the%20Force-be%20with%20you-green.svg)](https://github.com/hyper-pokemon/hyper-star-wars) [![Build Status](https://travis-ci.org/hyper-pokemon/hyper-star-wars.svg?branch=master)](https://travis-ci.org/hyper-pokemon/hyper-star-wars) [![Dependency Status](https://dependencyci.com/github/hyper-pokemon/hyper-star-wars/badge)](https://dependencyci.com/github/hyper-pokemon/hyper-star-wars) [![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/hyper-pokemon/Lobby) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/hyper-pokemon/hyper-star-wars) [![Latest version](https://badge.fury.io/gh/hyper-pokemon%2Fhyper-star-wars.svg)](https://github.com/hyper-pokemon/hyper-star-wars) [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

## Contents

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Options](#options)
- [Star Wars Characters](#star-wars-characters)
- [Download](#download)
- [Related](#related)
- [Team](#team)
- [License](#license)

## Description

**24 tailor-made, full fledged Star Wars themes for your Hyper terminal! Yes, lightsabers included!** ❤

All of the wonderful Star Wars backgrounds were created by the amazing [Filipe de Carvalho](http://filipedecarvalho.com) and are part of his [Star Wars - Long Shadow Flat Design Icons](http://filipedecarvalho.com/star-wars-long-shadow-flat-design-icons) project!<br/>**You can [appreciate his project](https://www.behance.net/gallery/17998561/Star-Wars-Long-Shadow-Flat-Design-Icons) and the rest of his super awesome work on [Behance](https://www.behance.net/creativeflip)!**

🎉 Do you enjoy this project? Maybe you love **Pokémon**? Then, you will also love our [Hyper Pokémon](https://github.com/hyper-pokemon/hyper-pokemon) ![](media/pikachu.gif) theme project!<br/>Go take a peek 👀 

Come over to our [Gitter](https://gitter.im/hyper-pokemon/Lobby) chat or [Twitter](https://twitter.com/hyper_pokemon) account to share your thoughts on the project or to just say hi!

## Install

### Using the plugin manager - `hpm-cli`

Firstly, ensure you have [Hyper](https://github.com/zeit/hyper/releases) and [Node.js](https://nodejs.org) installed in your system.<br/>
Then simply do the `npm` dance to get `hpm-cli`

```bash
# fire up a terminal and type
$ npm install -g hpm-cli
```

Once done with that, it's time to install the `hyper-star-wars` theme!

```bash
# run the hyper plugin manager
$ hpm install hyper-star-wars
```

### Manually through `.hyper.js`

Add `hyper-star-wars` to the plugins list in your `~/.hyper.js` config file and restart Hyper.
That's it!

```js
plugins: ['hyper-star-wars']
```

[:arrow_up:Back to top!](#contents)

## Usage

Once you have installed `hyper-star-wars`, it's time to set your favorite theme!

Go to your `~/.hyper.js` and add the `StarWarsTheme` settings object below the `colors` object, and define there your theme of choice!

Here is a quick example, where we choose the `yoda` theme, with the `lightsaber` mode activated and a colorful window header!

```js
config: {
	//...
	colors: {
	//...
	},
	StarWarsTheme: {
		character: 'yoda', // Define your favorite star wars character!
		lightsaber: 'true', // Activate your theme's lightsaber mode!
		unibody: 'false', // Define the color of the Hyper window header!
		avatar: 'true'  // Activate your theme's background avatar!
	},
	//...
}
```

![](media/example.png)

To get the exact same look, install Google's [`Roboto Mono`](https://fonts.google.com/specimen/Roboto+Mono) font as well as [`oh-my-zsh`](http://ohmyz.sh/) and choose [`pure`](https://github.com/sindresorhus/pure) as your zsh prompt

[:arrow_up:Back to top!](#contents)

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

[:arrow_up:Back to top!](#contents)

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

[:arrow_up:Back to top!](#contents)

## Download

### Fork the project

```bash
# clone the repository
$ git clone https://github.com/hyper-pokemon/hyper-star-wars.git
# navigate to the project directory
$ cd hyper-star-wars
```

### Using `npm`

```bash
# get the package & set it as a dependency
$ npm install hyper-star-wars --save
# or set it as a devDependency
$ npm install hyper-star-wars --save-dev
# or even save it globally
$ npm install hyper-star-wars -g
```

[:arrow_up:Back to top!](#contents)

## Related

Here is an awesome list where you can find other awesome Hyper themes & plugins!

- [Hyper Pokemon](https://github.com/hyper-pokemon/hyper-pokemon) - 🌈👾Wondrous, tailor-made Pokémon themes for your Hyper terminal
- [Awesome Hyper](https://github.com/bnb/awesome-hyper) - A curated list of sweet Hyper packages, themes, and resources.
- [Pure](https://github.com/sindresorhus/pure) - Pretty, minimal and fast ZSH prompt

[:arrow_up:Back to top!](#contents)

## Team

Meet the team and all the [super awesome contributors](https://github.com/hyper-pokemon/hyper-star-wars/blob/master/authors.md)! ❤<br/>

[![Leonidas Avdelas](https://avatars.githubusercontent.com/u/15968096?s=130)](https://github.com/LoniasGR) | [![Panagiotis Bakos](https://avatars.githubusercontent.com/u/23611809?s=130)](https://github.com/pmpakos) | [![George Baxopoulos](https://avatars.githubusercontent.com/u/19195396?s=130)](https://github.com/georgebax) | [![Thanasis Gkanos](https://avatars.githubusercontent.com/u/18072542?s=130)](https://github.com/ThanasisGkanos) | [![Konstantinos Mitropoulos](https://avatars.githubusercontent.com/u/24499401?s=130)](https://github.com/tsikos7) | [![Klaus Sinani](https://avatars.githubusercontent.com/u/12670537?s=130)](https://github.com/klauscfhq) | [![Mario Sinani](https://avatars.githubusercontent.com/u/29512262?s=130)](https://github.com/snowmancfhq) | [![Konstantinos Skouras](https://avatars.githubusercontent.com/u/15022446?s=130)](https://github.com/SkourasKonst) | [![Gabriel Tibúrcio](https://avatars.githubusercontent.com/u/5959178?s=130)](https://github.com/tibuurcio)
--- | --- | --- | --- | --- | --- | --- | --- | ---
[Leonidas Avdelas](https://github.com/LoniasGR) [:mailbox:](mailto:avdelasleonidas@gmail.com) | [Panagiotis Bakos](https://github.com/pmpakos) [:mailbox:](mailto:pmpakos@hotmail.com) | [George Baxopoulos](https://github.com/georgebax) [:mailbox:](mailto:baxopoulos.george@gmail.com) | [Thanasis Gkanos](https://github.com/ThanasisGkanos) [:mailbox:](mailto:athanasiosgkanos@hotmail.com) | [Konstantinos Mitropoulos](https://github.com/tsikos7) [:mailbox:](mailto:konsmitr@gmail.com) | [Klaus Sinani](https://github.com/klauscfhq) [:mailbox:](mailto:klauscfhq@protonmail.com) | [Mario Sinani](https://github.com/snowmancfhq) [:mailbox:](mailto:mariosinani@protonmail.ch) | [Konstantinos Skouras](https://github.com/SkourasKonst) [:mailbox:](mailto:konst.skouras@gmail.com) | [Gabriel Tibúrcio](https://github.com/tibuurcio) [:mailbox:](mailto:tibuurcio@gmail.com)

[:arrow_up:Back to top!](#contents)

## License

[MIT](https://github.com/hyper-pokemon/hyper-star-wars/blob/master/license.md)

<div align="center">
	<br>
			<a href="https://github.com/hyper-pokemon/hyper-star-wars">
				<img src="https://cdn.rawgit.com/hyper-pokemon/hyper-star-wars/8493363d/media/logo.png" alt="Hyper Star Wars" width="40%">
			</a>
		<br>
	 <p><b> <> with ❤ by the Hyper Pokémon team </b></p>
	<br>
</div>
