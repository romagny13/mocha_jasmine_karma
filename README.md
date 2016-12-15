# Mocha, Jasmine, Karma tests in browser and with Node + Webpack + es6

Install Mocha and Jasmine global
```
npm i jasmine -g
npm i mocha -g
```

(or local)

##1. Jasmine "browser"

Download Jasmine <a href="https://github.com/jasmine/jasmine/releases">standalone release</a>

##2. Mocha "browser"

```
mocha init ./test
```

... Then for Jasmine and Mocha

Install babel packages to use es6

Generate a bundle with <a href="https://webpack.github.io/docs/">Webpack</a>

Install webpack global (or local)
```
npm i Webpack -g
```
create a webpack.config.js with entry/output (+ loader,etc.)

generate the bundle
```
Webpack
```

reference this bundle in index.html

Open in browser spec runner page

##3. Karma

Install Karma global

```
npm i karma -g
```
Generate  karma.conf.js
```
karma init
```

Select test framework (mocha,jasmine) / launchers (chrome,phantomjs,etc.) / files (the webpack bundle or an index.js with all tests "required")

Generate a bundle with webpack

Start 

```
karma start
```





