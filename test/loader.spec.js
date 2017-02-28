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

  it ('should add vendor prefixes like configured by options', function() {
    loader.call({ options: { ngInlineStylesLoader: { flexbox: false }}}, fixtures.autoprefixerConfigTest.actual)
      .should
      .be
      .eql(fixtures.autoprefixerConfigTest.expected);
  });

  it ('should add vendor prefixes like configured by query options', function() {
    loader.call({ query: '?flexbox=false' }, fixtures.autoprefixerConfigTest.actual)
      .should
      .be
      .eql(fixtures.autoprefixerConfigTest.expected);
  });

  it ('should not be changed because options disable minification and autoprefixer', function() {
    loader.call({ options: { ngInlineStylesLoader: { minify: false, prefix: false }}}, fixtures.noChangeTest.actual)
      .should
      .be
      .eql(fixtures.noChangeTest.expected);
  });

  it ('should not be changed because query options disable minification and autoprefixer', function() {
    loader.call({ query: '?minify=false&prefix=false' }, fixtures.noChangeTest.actual)
      .should
      .be
      .eql(fixtures.noChangeTest.expected);
  });

  it ('should change nothing because of no css but require calls', function() {
    loader.call({}, fixtures.ignoreRequire.actual)
      .should
      .be
      .eql(fixtures.ignoreRequire.expected);
  });

  it ('should change nothing because there is nothing', function() {
    loader.call({}, fixtures.ignoreEmpty.actual)
      .should
      .be
      .eql(fixtures.ignoreEmpty.expected);
  }); 

  it ('should prefix and minify styles of aot compiled ng component', function() {
    loader.call({}, fixtures.ngAotComponent.actual)
      .should
      .be
      .eql(fixtures.ngAotComponent.expected);
  });
  
  it ('should prefix and minify styles of aot compiled ng component 2', function() {
    loader.call({}, fixtures.ngAotComponent2.actual)
      .should
      .be
      .eql(fixtures.ngAotComponent2.expected);
  });

  
  it ('should prefix and minify styles of aot compiled ng component 3', function() {
    loader.call({}, fixtures.ngAotComponent3.actual)
      .should
      .be
      .eql(fixtures.ngAotComponent3.expected);
  });
});
