jQuery clone values
==============
This plugin adds a optimized clone method to your jQuery library. It works exactly like the core method <a href="https://api.jquery.com/clone/" target="_blank">.clone()</a>, the only difference is, that all entered form values will be cloned too. The core <a href="https://api.jquery.com/clone/" target="_blank">.clone()</a> method clones only the dom, without the entered form values.

## Dependencies
* <a href="http://jquery.com/" target="_blank">jQuery 1.9+</a>

## Installation
* Download the file `jquery.clonevalues.min.js`
* Upload it to your server (e.g. `/js/` folder)
* Embed the file in your html code: `<script src="/js/jquery.clonevalues.min.js"></script>`

## Use
The arguments are the same as the jQuery <a href="https://api.jquery.com/clone/" target="_blank">.clone()</a> method but the method is called `cloneValues()`:

```javascript
$('.video').cloneValues( [withDataAndEvents ] [, deepWithDataAndEvents ] );
```

## Changelog
##### v1.0.1 (2014-11-17)
Initial release