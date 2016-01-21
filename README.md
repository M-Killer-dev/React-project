# React.js Boilerplate [![Dependency Status][dep-status-img]][dep-status-link] [![devDependency Status][dev-dep-status-img]][dev-dep-status-link] [![Build Status][ci-img]][ci]

Quick setup for new performance orientated, offline–first React.js applications featuring Redux, hot–reloading, PostCSS, react-router, ServiceWorker, AppCache, FontFaceObserver and Mocha.

[dep-status-img]: https://david-dm.org/mxstbr/react-boilerplate.svg
[dep-status-link]: https://david-dm.org/mxstbr/react-boilerplate
[dev-dep-status-img]: https://david-dm.org/mxstbr/react-boilerplate/dev-status.svg
[dev-dep-status-link]: https://david-dm.org/mxstbr/react-boilerplate#info=devDependencies
[ci-img]: https://travis-ci.org/mxstbr/react-boilerplate.svg
[ci]: https://travis-ci.org/mxstbr/react-boilerplate

-----

## Features

- Using [**react-transform-hmr**](https://github.com/gaearon/react-transform-hmr), your changes in the CSS and JS get reflected in the app instantly without refreshing the page. That means that the **current application state persists** even when you change something in the underlying code! For a very good explanation and demo watch Dan Abramov himself [talking about it at react-europe](https://www.youtube.com/watch?v=xsSnOQynTHs).

- [**Redux**](https://github.com/gaearon/redux) is a much better implementation of a flux–like, unidirectional data flow. Redux makes actions composable, reduces the boilerplate code and makes hot–reloading possible in the first place. For a good overview of redux check out the talk linked above or the [official documentation](https://gaearon.github.io/redux/)!

- [**PostCSS**](https://github.com/postcss/postcss) is like Sass, but modular and capable of much more. PostCSS is, in essence, just a wrapper for plugins which exposes an easy to use, but very powerful API. While it is possible to [replicate Sass features](https://github.com/jonathantneal/precss) with PostCSS, PostCSS has an [ecosystem of amazing plugins](http://postcss.parts) with funcionalities Sass cannot even dream about having.

- **Unit tests** should be an important part of every web application developers toolchain. [Mocha](https://github.com/mochajs/mocha) checks your application is working exactly how it should without you lifting a single finger. Congratulations, you just won a First Class ticket to world domaination, fasten your seat belt please!

- [**react-router**](https://github.com/rackt/react-router) is used for routing in this boilerplate. Using the new, and currently unreleased, `1.0` version, react-router makes routing really easy to do and takes care of a lot of the work. Since the version is not officially out yet, the [documentation](https://github.com/rackt/react-router/blob/master/doc/00%20Guides/0%20Overview.md) is not fully finished, but by far finished enough to work for most needs.

- [**ServiceWorker**](http://www.html5rocks.com/en/tutorials/service-worker/introduction/) and [**AppCache**](http://www.html5rocks.com/en/tutorials/appcache/beginner/) make it possible to use your application offline. As soon as the website has been opened once, it is cached and available without a network connection. [**`manifest.json`**](https://developer.chrome.com/multidevice/android/installtohomescreen) is specifically for Chrome on Android. Users can add the website to the homescreen and use it like a native app!

## Getting started

> Note: You'll need Node, npm and git installed for this to work – if you don't have them installed, have never heard of them or one of those steps throws an error, check out the [prerequisites](./docs/general/prerequisites.md) first!

1. Clone this repo using `git clone git@github.com:mxstbr/react-boilerplate`.

2. Run `npm run initProject` to initialize a new project.

3. Run `npm start` to start the local web server.

Now you can go to `http://localhost:3000` and see your app!

## Building & Deploying

1. Run `npm run build`, which will compile all the necessary files in a `build` folder.

2. Upload the contents of the `build` folder to your web server.

### Server Configuration

#### Apache

This boilerplate includes a `.htaccess` file that does two things:

1. Redirect all traffic to HTTPS because ServiceWorker only works for encrypted traffic

2. Rewrite all pages (e.g. yourdomain.com/subpage) to the `index.html` to let `react-router` take care of presenting the correct page

## Structure

As a developer making an application, check out the `app/` and the `tests/` folder and the files inside those. The rest of the folders and files is only there to make your life making your app much easier, and should not have to be touched. (If they have to be changed, please submit an issue with the reason for your change!)

`app/` contains your entire application code, including CSS, JavaScript and HTML. `tests/` contains your unit tests.

## CSS

The CSS modules found in the `app/css` subfolders all get imported into one big file (`main.css`), which gets transpiled with PostCSS.

See the [`css` folder README](app/css/README.md) for more information about the PostCSS plugins used and the CSS structure.

## JS

All files that are `import`ed/`require`d somewhere get compiled into one big file at build time. (`build/bundle.js`) Webpack automatically optimizes your JavaScript with `UglifyJS`, so you don't have to worry about that.

See the [`js` folder README](app/js/README.md) for more information about the JS structure.

## Testing

### Performance testing

With the development server running (i.e. while `$ npm start` is running in another tab), enter `$ npm run pagespeed` to run Google PageSpeed Insights and get a performance check right in your terminal!

### Browser testing

With `$ npm run serve` you can start a server that's accessible in the entire local network and shows the version of the app that's in the `build` folder. Useful for testing on different devices!

### Unit testing

Unit tests live in the `tests/` directory, and are run with `$ npm run test`. There are two files in there already, checking that the current AppActions and Reducers are working correctly. Mocha is used as a unit testing framework, for more information on how to use it check out the official [documentation](http://mochajs.org)!

## Files in the root folder

For a full explanation of all files, see [`docs/FILES.md`](docs/FILE-APPENDIX.md).

## Opinionated features

### Web Fonts

If you simply use web fonts in your project, the page will stay blank until these fonts are downloaded. That means a lot of waiting time in which users could already read the content.

[FontFaceObserver](https://github.com/bramstein/fontfaceobserver) adds a `js-<font-name>-loaded` class to the `body` when the fonts have loaded. You should specify an initial `font-family` with save fonts on the `body`, and a `.js-<font-name>-loaded` `font-family` which includes your web font. See [app.js](app/js/app.js#L17-L25) and [base.css](app/css/base/_base.css#L26-L32).

#### Adding a new font

1. Either add the `@font-face` declaration to `base/_fonts.css` or add a `<link>` tag to the [`index.html`](app/index.html). (Don't forget to remove the `<link>` for Open Sans from the [`index.html`](app/index.html))

2. In `app/base/_base.css`, specify your initial `font-family` in the `body` tag with only save fonts. In the `body.js-<font-name>-loaded` tag, specify your `font-family` stack with your web font.

3. In `app/js/app.js` add a `<font-name>Observer` for your font.

#### Removing performant web font loading

**Careful** about removing this, as perceived performance might be highly impacted.

To remove `FontFaceObserver`, don't import it in [`app.js`](app/js/app.js) and remove it from the [`package.json`](package.json).

### Offline access

Using a `ServiceWorker` and the `Application Cache`, your application is cached for offline usage.

#### Cache a new file

To cache a file, add it to the `urlsToCache` variable in the [`serviceworker.js`](app/serviceworker.js) file.

#### Removing offline access

**Careful** about removing this, as there is no real downside to having your application available when the users network connection isn't perfect.

To remove offline capability, delete the `offline-plugin` from the [`package.json`](package.json), remove the import of the plugin in [`app.js`](app/js/app.js) and remove the plugin from the [`webpack.prod.babel.js`](webpack/webpack.prod.babel.js).

### Add To Homescreen

On Chrome for Android (soon hopefully more browsers), users can add a webpage to the homescreen. Combined with offline caching, this means your web app can be used exactly like a native application.

The name and icon to be displayed are set in the `app/manifest.json` file. Change them to your project name and icon, and try it!

#### Removing add to homescreen functionality

Delete [`manifest.json`](app/manifest.json) and remove the `<link rel="manifest" href="manifest.json">` tag from the [`index.html`](app/index.html).

## License

This project is licensed under the MIT license, Copyright (c) 2015 Maximilian Stoiber. For more information see `LICENSE.md`.
