/* globals HTMLImports, Polymer */

import '../node_modules/webcomponents.js/webcomponents-lite.min.js';

import helloWorld from './components/hello-world/hello-world.js';
import polymerImport from './components/polymer-import/polymer-import.js';

HTMLImports.whenReady(() => {
  Polymer(helloWorld);
});

