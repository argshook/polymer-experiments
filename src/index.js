/* globals Polymer */

import helloWorld from './components/hello-world/hello-world.js';
import prClock from './components/pr-clock/pr-clock.js';
import prDropdown from './components/pr-dropdown/pr-dropdown.js';
import prDropdownRow from './components/pr-dropdown/pr-dropdown-row/pr-dropdown-row.js';
import prDropdowList from './components/pr-dropdown/pr-dropdown-list/pr-dropdown-list.js';

const COMPONENTS = [
  helloWorld,
  prClock,
  prDropdown,
  prDropdownRow,
  prDropdowList
];

COMPONENTS.forEach(c => Polymer(c));

