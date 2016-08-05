# Polymer Experiments

question: can i make web components with polymer and bundle them to one js file?

answer: this repo! 

it should hopefully work live here: [http://arijus.net/polymer-experiments](http://arijus.net/polymer-experiments)

## How

1. `npm i`
1. `npm start` - for dev [localhost:8080](http://localhost:8080)
1. `npm run build` - for prod, creates `bundle.min.js`

## Usage

1. super simple React example [react.html](react.html)

    this requires to use real shadow dom:
    ```js
    window.Polymer = {
        dom: 'shadow'
    };
    ```
    > Note: if you do this, do it *before* adding `bundle.min.js`!

    need to check if [react-integration](https://github.com/webcomponents/react-integration) could help without too much overhead

2. super simple Angular 1.5 example [angular.html](angular.html)

these examples are currently pretty stupid. Need to test:

1. polymer integration with multiple nested polymer components;
1. passing values (via attributes/props) to polymer components;
1. receiving events from polymer and correctly passing them to angular/react/somethingelse;
1. nesting angular/react components inside polymer?

## Misc

1. `npm run build-polymer`

   this creates `src/polymer.js` out of `node_modules/Polymer/polymer.html`. It is imported in `src/index.js`. You shouldn't need this to run manually. It's done after `npm i` and before `npm run build`.

