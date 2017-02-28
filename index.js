var loaderUtils = require('loader-utils');
var postcss = require('postcss');
var autoprefixer = require('autoprefixer');
var CleanCSS = require('clean-css');

var stylesRegex = /(?=styles\s*[:|_])([^]*)\s*\}\s*[`"']\s*\]/g
var cssRegex = /([^'`"]*\{[^\}]*\})/g

var minify = function (input, config) {
  return config.minify ? new CleanCSS().minify(input).styles : input;
}

var prefix = function (input, config) {
  return config.prefix ? postcss([ autoprefixer(config) ]).process(input).css : input;
}

module.exports = function(source, sourcemap) {
  var config = { minify: true, prefix: true };
  var query = loaderUtils.parseQuery(this.query);

  if (this.options != null) {
    Object.assign(config, this.options['ngInlineStylesLoader']);
  }

  Object.assign(config, query);

  // Not cacheable during unit tests
  this.cacheable && this.cacheable();

  var modifiedSource = source;
  var stylesMatch = modifiedSource.match(stylesRegex);
  if (stylesMatch && stylesMatch.length) {  
    var modifiedStyles = stylesMatch[0].replace(cssRegex, (match, css) => {
      css = css.replace(/\\n/gm, '');
      var minifiedAndPrefixed = minify(prefix(css, config), config);
      return minifiedAndPrefixed.replace(/'/gm, '"');
    });
    modifiedSource = modifiedSource.replace(stylesRegex, modifiedStyles);
  }

  // support for tests
  if (this.callback) {
    this.callback(null, modifiedSource, sourcemap);
  } else {
    return modifiedSource;
  }
}
