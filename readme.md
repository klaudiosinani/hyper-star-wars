<h1 align="center">
			<a href="https://github.com/hyper-pokemon/hyper-star-wars">
				<img src="https://cdn.rawgit.com/hyper-pokemon/hyper-star-wars/e022af78/media/header.png" alt="Hyper Star Wars" width="100%">
			</a>
</h1>

> 🌟🚀Super awesome, your Hyper terminal shall look.

[![Build Status](https://travis-ci.org/hyper-pokemon/hyper-star-wars.svg?branch=master)](https://travis-ci.org/hyper-pokemon/hyper-star-wars) [![Dependency Status](https://dependencyci.com/github/hyper-pokemon/hyper-star-wars/badge)](https://dependencyci.com/github/hyper-pokemon/hyper-star-wars) [![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/hyper-pokemon/Lobby) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/hyper-pokemon/hyper-star-wars) [![Latest version](https://badge.fury.io/gh/hyper-pokemon%2Fhyper-star-wars.svg)](https://github.com/hyper-pokemon/hyper-star-wars) [![npm](https://img.shields.io/npm/dm/hyper-star-wars.svg?label=DL)](https://github.com/hyper-pokemon/hyper-star-wars)

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

Here is a quick example, where we choose the `yoda` theme, with a `unibody` color for the window header!

```js
config: {
    //...
    colors: {
    //...
    },
    StarWarsTheme: {
        character: 'yoda', // Define your favorite star wars character!
        unibody: 'true' // Define the color of the Hyper window header!
    },
    //...
}
```

[:arrow_up:Back to top!](#contents)

## Options

### `character`

Using this option you can choose your Star Wars character theme along with it's tailor-made syntax color.

The assignable values are:

- `character name` - choose any of the [available Star Wars characters](#available-themes) by defining their name.<br/><br/>**i.e.** `character: 'yoda'`, `character: 'darth-vader'`, `character: 'bb8'` **etc**<br/><br/>

- `random` - randomly selects a Star Wars character theme from **all** available characters, each time you fire up a new Hyper terminal session.<br/><br/>
**i.e.** `character: 'random'`<br/><br/>

- `character array` - randomly selects a Star Wars character theme/theme option from a **defined array** holding **custom multiple themes/theme options**, each time you fire up a new Hyper terminal session. Any from the available Star Wars character **themes** can be choosen!<br/><br/>
**i.e.**
	- `character: ['yoda', 'chewbacca', 'bb8', 'han-solo', 'c3po']`
	- `character: ['darth-vader', 'stormtrooper', 'spacetrooper', 'ray']`
	- `character: ['random', 'finn', 'boba-fett', 'leia-organa', 'maz-katana']` **etc**<br/><br/>

### `unibody`

Choose whether or not you want the Hyper windows header color to be the same as the background Star Wars character theme.

The assignable values are:

- `unibody: 'true'` - choose it for a unibody color theme
- `unibody: 'false'` - go for it if you like your terminal more colorful

In addition, completely omitting the `unibody` option from your `.hyper.js` will have the same effect as defining it and setting it to `true`. (**default state**)

[:arrow_up:Back to top!](#contents)

## Star Wars Characters

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

- [Hyper Pokemon](https://github.com/hyper-pokemon/hyper-pokemon)
- [Awesome Hyper](https://github.com/bnb/awesome-hyper)
- [Pure](https://github.com/sindresorhus/pure)

[:arrow_up:Back to top!](#contents)

## Team

[:arrow_up:Back to top!](#contents)

## License

[MIT](https://github.com/hyper-pokemon/hyper-star-wars/blob/master/license.md)
