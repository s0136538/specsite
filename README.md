# spec.edmcouncil.org

[![Build Status](https://travis-ci.org/edmcouncil/specsite.svg?branch=master)](https://travis-ci.org/edmcouncil/specsite)

## Intro

For the site 'https://spec.edmcouncil.org' site we're developing an advanced front-end
application (as a so-called "Single Page Application") that provides an engaging user
experience for anyone who wants to work with the "artifacts" that we generate from
the FIBO repository.

This web-application is under development on temporarily published here:

- https://edmcouncil.github.io/specsite/

The final location of this site will be:

- https://spec.edmcouncil.org


## Tech Stack

This is the technology stack that we're working with to develop the "specsite app":

- [React](https://facebook.github.io/react/)
  > A javascript library for building user interfaces
  - Component based
    > Build encapsulated components that manage their own state, then compose them to make complex UIs.

- [Redux](http://redux.js.org)

  > Redux is an open-source JavaScript library designed for managing application state. 
  > It is primarily used together with React for building user interfaces.
  
  > Redux is a predictable state container for JavaScript apps.
  
- [Immutable](https://facebook.github.io/immutable-js/)
  
  > Immutable collections for JavaScript
  
  Immutable is a facebook open source project. We use it in combination with Redux.

- [Babel](https://babeljs.io)
  > Babel is a JavaScript Compiler
  
  > Babel has support for the latest version of JavaScript through syntax transformers. These plugins allow you 
  > to use new syntax, right now without waiting for browser support. 

- [npm](https://www.npmjs.com)
  > npm is the package manager for JavaScript and the world’s largest software registry. Discover packages of 
  > reusable code — and assemble them in powerful new ways.

- [yarn](https://yarnpkg.com/en/)
  
  > Fast, reliable and secure dependency management
  
  > Yarn is a new npm-compatible package manager for Node.js. Developed at Facebook 
  > in collaboration with Exponent, Google, and Tilde, Yarn is a great example of how
  > the community came together to tackle the hard problem that is package management.
  
- [Material Design](https://material.io/guidelines/)
 
  > a visual language that synthesizes classic principles of good design with the innovation and possibility of 
  > technology and science.
  
  - See also [WikiPedia](https://en.wikipedia.org/wiki/Material_Design)
  
- [react-md](https://react-md.mlaursen.com)
  Uses the Google Material Design components and React to enable a
  "material design styled website"

- [create-react-app](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html)

  > Create React App is a new officially supported way to create single-page React applications. 
  > It offers a modern build setup with no configuration.
  
  > Create React App uses both [webpack](#webpack) and [Babel](#babel) under the hood.
  
  > ESLint is also integrated so lint warnings are displayed right in the console.

- [webpack](https://webpack.js.org)

  > webpack is a module bundler for modern JavaScript applications. 
  > When webpack processes your application, it recursively builds a dependency
  > graph that includes every module your application needs, then packages all of 
  > those modules into a small number of bundles - often only one - to be loaded 
  > by the browser.
  
- [jest](https://facebook.github.io/jest/)

  > Jest is used by Facebook to test all JavaScript code including React applications. 
  
- [chai](http://chaijs.com)

  > Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any
  > javascript testing framework.
  
- [ESLint](http://eslint.org)

  > The pluggable linting utility for JavaScript and JSX

## How to run

The site can be run locally as follows:

```
yarn start
```

Or for testing the "production build":

```
yarn global add serve
serve -s build
```

## Pre-requisites

### Mac OS X

This readme assumes that you develop the site on Mac OS X

### YARN

Install YARN 

```
brew install yarn
```

## Tutorials

### React

- https://scotch.io/tutorials/create-a-simple-to-do-app-with-react
- http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html
  > A Comprehensive Guide to Test-First Development with Redux, React, and Immutable
- http://andrewhfarmer.com/getting-started-tutorials/
  > Top 5 Tutorials for Getting Started with React

