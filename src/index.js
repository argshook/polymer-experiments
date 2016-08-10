/* globals Polymer, HTMLImports */

import helloWorld from './components/hello-world/hello-world.js';
import prClock from './components/pr-clock/pr-clock.js';
import prDropdown from './components/pr-dropdown/pr-dropdown.js';
import prDropdownRow from './components/pr-dropdown/pr-dropdown-row/pr-dropdown-row.js';
import prSlider from './components/pr-slider/pr-slider.js';

const COMPONENTS = [
  helloWorld,
  prClock,
  prDropdown,
  prDropdownRow,
  prSlider
];

HTMLImports.whenReady(() => {
  COMPONENTS.forEach(c => Polymer(c));
});

