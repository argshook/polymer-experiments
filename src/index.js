/* globals HTMLImports, Polymer */

import helloWorld from './components/hello-world/hello-world.js';

HTMLImports.whenReady(() => {
  Polymer(helloWorld);
});

