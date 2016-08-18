(function(angular) {
  'use strict';

  angular
    .module('app', ['argshook.ngOn'])

    .component('angularComponent', angularComponent())
    .component('dropdownComponent', dropdownComponent())
    .component('sliderComponent', sliderComponent())
    .component('radioGroup', radioGroup());

  function angularComponent() {
    return {
      templateUrl: 'views/clock.html',
      controller: function() {
        this.format = '24h';
        this.toggleFormat = function() {
          this.format = this.format === '24h' ? '12h' : '24h';
        };

        this.events = {
          'format-changed': function(e) { logEvent(e); },
          'custom-polymer-event': function(e) { logEvent(e); },
          click: function(e) { logEvent(e); }
        };

        function logEvent(e) {
          console.dir(e.type, e.details);
        }
      }
    };
  }

  function dropdownComponent() {
    return {
      templateUrl: 'views/dropdown.html',
      controller: function() {
        this.selectedValue = 'nothing yet';

        this.dropdownEvents = {
          'value-changed': function(event) {
            this.selectedValue = this.items.find(function(i) {
              return i.value == event.detail.value;
            });
          }.bind(this)
        };

        this.items = [
          { value: 1, label: 'first' },
          { value: 2, label: 'second' },
          { value: 3, label: 'third' }
        ];
      }
    };
  }

  function sliderComponent() {
    return {
      templateUrl: 'views/slider.html',
      controller: function() {
        this.value = 0;

        this.handleChange = function({ detail }) {
          this.value = detail.value;
        };
      }
    };
  }

  function radioGroup() {
    return {
      templateUrl: 'views/radio-group.html',
      controller: function() {
        this.selected = 'second';

        this.options = [
          { value: 'first', label: 'First option!' },
          { value: 'second', label: 'second option!' },
          { value: 'third', label: 'third option!' }
        ];

        this.selectedChanged = function(event) {
          console.log(event.detail);
          this.selected = event.detail.value;
        };
      }
    };
  }

})(window.angular);

