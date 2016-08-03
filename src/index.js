/* globals HTMLImports, Polymer */

import '../node_modules/webcomponents.js/webcomponents-lite.min.js';

import './polymer.js';
import helloWorld from './components/hello-world/hello-world.js';

HTMLImports.whenReady(() => {
  Polymer(helloWorld);
});

