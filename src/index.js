/* globals Polymer */

import helloWorld from './components/hello-world/hello-world.js';
import prClock from './components/pr-clock/pr-clock.js';

const COMPONENTS = [ helloWorld, prClock ];

COMPONENTS.forEach(c => Polymer(c));

