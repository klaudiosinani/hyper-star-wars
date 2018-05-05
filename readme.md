<h1 align="center">
  <img src="https://cdn.rawgit.com/klauscfhq/hyper-star-wars/32d811df/media/logo.png" width="30%"><br/>Hyper Star Wars
</h1>

<h4 align="center">
  🚀 Super awesome, your Hyper terminal shall look.
</h4>

<div align="center">
      <a href="https://github.com/klauscfhq/hyper-star-wars">
        <img src="https://cdn.rawgit.com/klauscfhq/hyper-star-wars/32d811df/media/example.png" alt="Hyper Star Wars" width="95%">
      </a>
</div>

<p align="center">
  <a href="https://github.com/klauscfhq/hyper-star-wars">
    <img alt="May the Force be will you" src="https://img.shields.io/badge/May%20the%20Force-be%20with%20you-green.svg">
  </a>
  <a href="https://travis-ci.org/klauscfhq/hyper-star-wars">
    <img alt="Build Status" src="https://travis-ci.org/klauscfhq/hyper-star-wars.svg?branch=master">
  </a>
  <a href="https://tidelift.com/repo/github/klauscfhq/hyper-star-wars">
    <img alt="Dependency Status" src="https://tidelift.com/badges/github/klauscfhq/hyper-star-wars?style=flat">
  </a>
  <a href="https://github.com/klauscfhq/hyper-star-wars">
    <img alt="XO code style" src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg">
  </a>
  <a href="https://gitter.im/klauscfhq/hyper-star-wars">
    <img alt="Gitter" src="https://img.shields.io/gitter/room/nwjs/nw.js.svg">
  </a>
  <a href="https://github.com/klauscfhq/hyper-star-wars">
    <img alt="npm" src="https://img.shields.io/npm/dt/hyper-star-wars.svg">
  </a>
  <a href="https://github.com/bnb/awesome-hyper">
    <img alt="Awesome" src="https://awesome.re/mentioned-badge.svg">
  </a>
</p>

## Contents

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Options](#options)
- [Available Themes](#available-themes)
- [Related](#related)
- [Team](#team)
- [License](#license)

## Description

24 tailor-made, full fledged Star Wars themes for your Hyper terminal.

All of the wonderful Star Wars backgrounds were created by the amazing [Filipe de Carvalho](http://filipedecarvalho.com) and are part of his [Star Wars - Long Shadow Flat Design Icons](http://filipedecarvalho.com/star-wars-long-shadow-flat-design-icons) project. You can [appreciate his project](https://www.behance.net/gallery/17998561/Star-Wars-Long-Shadow-Flat-Design-Icons) and the rest of his super awesome work on [Behance](https://www.behance.net/creativeflip).

Do you enjoy this project? Maybe you love **Pokémon**? Then, you will also love our [Hyper Pokémon](https://github.com/klauscfhq/hyper-pokemon) ![](media/pikachu.gif) theme project. Go take a peek.

Come over to our [Gitter](https://gitter.im/klauscfhq/hyper-star-wars) chat to share your thoughts on the project or to just say hi.

Get the backgrounds as 4K HD wallpapers [here](https://www.dropbox.com/sh/il9099epzoyylvw/AABfkYQbuzFJr9yIDaOROZcVa?dl=0).

## Install

### Using the plugin manager - `hyper`

Firstly, ensure you have [Hyper](https://github.com/zeit/hyper/releases) installed in your system.

Once done with that, it's time to install the `hyper-star-wars` theme.

```bash
# fire up a terminal and type
$ hyper i hyper-star-wars
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

- `character name` - choose any of the [available Star Wars characters](#available-themes) by defining their name.<br/><br/>**i.e.** `character: 'yoda'`, `character: 'darth-vader'`, `character: 'bb8'` **etc**<br/><br/>

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

Activates your theme's `lightsaber` mode, making your terminal's `tab bar` glow.

The assignable values are:

- `lightsaber: 'true'` - enable your theme's `lightsaber` mode
- `lightsaber: 'false'` - disable your theme's `lightsaber` mode

Also, completely omitting the `lightsaber` option from your `.hyper.js` will have the same effect as defining it and setting it to `false`. (**Default value**)

![](media/lightsaber-example.png)

### `unibody`

Choose whether or not you want the Hyper window header color to be the same as the background Star Wars character theme.

The assignable values are:

- `unibody: 'true'` - choose it for a unibody color theme
- `unibody: 'false'` - go for it if you like your terminal more colorful

In addition, completely omitting the `unibody` option from your `.hyper.js` will have the same effect as defining it and setting it to `true`. (**Default value**)

![](media/unibody-example.png)

### `avatar`

Choose whether or not you want the Star Wars character theme `avatar` to be displayed in the background.

The assignable values are:

- `avatar: 'true'` - enable your theme's background `avatar`
- `avatar: 'false'` - disable your theme's background `avatar`

In addition, completely omitting the `avatar` option from your `.hyper.js` will have the same effect as defining it and setting it to `true`. (**Default value**)

![](media/avatar-example.png)

## Available Themes

You can preview in detail all of the themes [here](https://klauscfhq.github.io/hyper-star-wars).

<details>
<summary>List of all the available themes.</summary>

<br/>

* `darth-vader`
* `yoda`
* `stormtrooper`
* `r2d2`
* `chewbacca`
* `snowtrooper`
* `kylo-ren`
* `bb8`
* `obi-wan-kenobi`
* `luke-skywalker-older`
* `emperor`
* `spacetrooper`
* `c3po`
* `finn`
* `boba-fett`
* `leia-organa`
* `maz-kanata`
* `finn-stormtrooper`
* `han-solo`
* `luke-skywalker`
* `rey`
* `princess-leia`
* `poe-dameron`
* `han-solo-older`

<br/>

</details><br/>

## Related

More awesome Hyper plugins.

- [Hyper Pokemon](https://github.com/klauscfhq/hyper-pokemon) - 🌈 Tailor-made Pokémon themes for your Hyper terminal.

## Team

Coded with ❤ by

- Klaus Sinani [(@klauscfhq)](https://github.com/klauscfhq)
- Mario Sinani [(@mariocfhq)](https://github.com/mariocfhq)

## License

[MIT](https://github.com/klauscfhq/hyper-star-wars/blob/master/license.md)
