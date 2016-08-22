# Polymer Experiments

question: can i make web components with polymer and bundle them to one js file?

answer: this repo!

it should hopefully work live here: [http://arijus.net/polymer-experiments](http://arijus.net/polymer-experiments)

## How

1. `npm i`
1. `bower i`
1. `npm start` - for dev [localhost:8080](http://localhost:8080)
1. `npm run build` - creates bundles in `/dist`

> NOTE: please run `npm run build` at least once before running `npm start`!

## Examples

### Vanilla

[index.html](index.html)

no framework, just components

### React

[react.html](react.html)

#### TODO

* [x] integration with multiple nested components;
* [x] passing values via props to components;
* [x] handling component events;
* [ ] styling (with `className`, `style`)
* [ ] try [react-integration](https://github.com/webcomponents/react-integration)

### Angular

[angular.html](angular.html)

#### TODO

* [x] integration with multiple nested components;
* [x] handling component events;
* [ ] styling (with `ng-style`, `ng-class`)

# TODO

* [x] autoprefixer

