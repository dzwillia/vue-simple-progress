# vue-simple-progress
> A simple, flexible progress bar for Vue.js

vue-simple-progress is designed to be a lightweight [Vue.js](http://vuejs.org) progress bar requiring minimal configuration.

## Documentation
[https://github.com/dzwillia/vue-simple-progress/](https://github.com/dzwillia/vue-simple-progress/)

## Demo

[https://dzwillia.github.io/vue-simple-progress/examples](https://dzwillia.github.io/vue-simple-progress/examples)

## JsFiddle Demo

[http://jsfiddle.net/dzwillia/47pvcjs9](http://jsfiddle.net/dzwillia/47pvcjs9)

## Requirements
* [Vue.js](http://vuejs.org/) (^v2.1.4)

## Browser support
IE 10+ (due to [CSS animation support](https://caniuse.com/#feat=css-animation)).

## Installation

### NPM

```bash
npm install vue-simple-progress --save
```

## Usage
> All styling for this component is done via computed styles in the `Progress.vue` component and requires no external CSS files.

### ES6

*The following examples can also be used with CommonJS by replacing ES6-specific syntax with CommonJS equivalents.*

```js
import Vue from 'vue'
import ProgressBar from 'vue-simple-progress'

new Vue({
  components: {
    ProgressBar
  }
})
```

### Globals (script tag)

Add a script tag pointing to `dist/vue-simple-progress.min.js` *after* adding Vue.

Example:

```html
<html>
<head>
  ...
</head>
<body>
  <div id="app">
    <vue-simple-progress></vue-simple-progress>
  </div>

  <script src="path/to/vue.js"></script>
  <script src="path/to/vue-simple-progress.js"></script>
  <script>
    new Vue({
      el: '#app'
    })
  </script>
</body>
</html>
```

## License
vue-simple-progress is open source and released under the [MIT License](LICENSE).

Copyright (c) 2017 [David Z Williams](https://twitter.com/padredaveo).

> *PS: I would love to know if you're using vue-simple-progress. Tweet to me at [@padredaveo](https://twitter.com/padredaveo)*.


