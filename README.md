# Polymer Experiments

question: can i make web components with polymer and bundle them to one js file?

answer: this repo!

it should hopefully work live here: [http://arijus.net/polymer-experiments](http://arijus.net/polymer-experiments)

## How

1. `npm i`
1. `npm start` - for dev [localhost:8080](http://localhost:8080)
1. `npm run build` - for prod, creates `bundle.min.js`

## Examples

### Vanilla

[index.html](index.html)

no framework, just components

### React

[react.html](react.html)

#### TODO

* [ ] integration with multiple nested components;
* [ ] passing values via props to components;
* [ ] handling component events;
* [ ] styling (with `className`, `style`)
* [ ] try [react-integration](https://github.com/webcomponents/react-integration)

### Angular

[angular.html](angular.html)

#### TODO

* [ ] integration with multiple nested components;
* [x] handling component events;
* [ ] styling (with `ng-style`, `ng-class`)

# TODO

* [ ] autoprefixer

