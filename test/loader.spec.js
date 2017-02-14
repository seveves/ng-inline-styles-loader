var should = require('should');
var loader = require('../index');

var fixtures = require('./fixtures');

describe('loader', function() {
  it ('should prefix and minify styles (input: on one line)', function() {
    loader.call({}, fixtures.ngComponentWithStylesOnOneLine.actual)
      .should
      .be
      .eql(fixtures.ngComponentWithStylesOnOneLine.expected);
  });

  it ('should prefix and minify styles (input: on one line with single quotes)', function() {
    loader.call({}, fixtures.ngComponentWithStylesOnOneLineSingleQuotes.actual)
      .should
      .be
      .eql(fixtures.ngComponentWithStylesOnOneLineSingleQuotes.expected);
  });

  it ('should prefix and minify styles (input: on one line with double quotes)', function() {
    loader.call({}, fixtures.ngComponentWithStylesOnOneLineDoubleQuotes.actual)
      .should
      .be
      .eql(fixtures.ngComponentWithStylesOnOneLineDoubleQuotes.expected);
  });

  it ('should prefix and minify styles (input: on one line with single and double quotes)', function() {
    loader.call({}, fixtures.ngComponentWithStylesOnOneLineSingleAndDoubleQuotes.actual)
      .should
      .be
      .eql(fixtures.ngComponentWithStylesOnOneLineSingleAndDoubleQuotes.expected);
  });

  it ('should prefix and minify styles (input: line breaks)', function() {
    loader.call({}, fixtures.ngComponentWithStylesAndLineBreaks.actual)
      .should
      .be
      .eql(fixtures.ngComponentWithStylesAndLineBreaks.expected);
  });

  it ('regex should find styles', function() {
    loader.call({}, fixtures.regexTest.actual)
      .should
      .be
      .eql(fixtures.regexTest.expected);
  });

  it ('autoprefixer should add vendor prefixes', function() {
    loader.call({}, fixtures.autoprefixerTest.actual)
      .should
      .be
      .eql(fixtures.autoprefixerTest.expected);
  });

  it ('autoprefixer should add vendor prefixes like configured by options', function() {
    loader.call({ options: { ngStylesLoader: { flexbox: false }}}, fixtures.autoprefixerConfigTest.actual)
      .should
      .be
      .eql(fixtures.autoprefixerConfigTest.expected);
  });

  it ('autoprefixer should add vendor prefixes like configured by query options', function() {
    loader.call({ query: '?flexbox=false' }, fixtures.autoprefixerConfigTest.actual)
      .should
      .be
      .eql(fixtures.autoprefixerConfigTest.expected);
  });

  it ('file should not be changed because options disable minification and autoprefixer', function() {
    loader.call({ options: { ngStylesLoader: { minify: false, prefix: false }}}, fixtures.noChangeTest.actual)
      .should
      .be
      .eql(fixtures.noChangeTest.expected);
  });

  it ('file should not be changed because query options disable minification and autoprefixer', function() {
    loader.call({ query: '?minify=false&prefix=false' }, fixtures.noChangeTest.actual)
      .should
      .be
      .eql(fixtures.noChangeTest.expected);
  });
});
