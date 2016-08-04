# Polymer Experiments

question: can i make web components with polymer and bundle them to one js file?

answer: this repo! 

it should hopefully work live here: [http://arijus.net/polymer-experiments](http://arijus.net/polymer-experiments)

## How

1. `npm i`
1. `npm start` - for dev [localhost:8080](http://localhost:8080)
1. `npm run build` - for prod, creates `bundle.min.js`

## Misc

1. `npm run build-polymer`
   this creates `src/polymer.js` out of `node_modules/Polymer/polymer.html`. It is imported in `src/index.js`. You shouldn't need this to run manually. It's done after `npm i` and before `npm run build`.

