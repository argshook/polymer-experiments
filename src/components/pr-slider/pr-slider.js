/* global Polymer */
export default {
  is: 'pr-slider',

  properties: {
    value: {
      type: Number,
      value: 0,
      notify: true,
      reflectToAttribute: true
    },
    min: {
      type: Number,
      value: 0,
      readOnly: true
    },
    max: {
      type: Number,
      value: 100,
      readOnly: true
    },
    tracking: {
      type: Boolean,
      value: false
    }
  },

  handleTrack(event) {
    switch (event.detail.state) {
      case 'start':
        return Polymer.dom(this.$.bar).classList.add('tracking');

      case 'track':
        return this.updateValue();

      case 'end':
        return Polymer.dom(this.$.bar).classList.remove('tracking');
    }
  },

  handleTap() {
    this.updateValue();
  },

  updateValue() {
    const newPosition = this.getRelativePosition(event.detail.x);

    this.customStyle['--pin-position-x'] = `${newPosition}px`;
    this.value = this.convertPositionToValue(newPosition);
    this.updateStyles();
  },

  getRelativePosition(pos) {
    const left = pos - this.$.bar.offsetLeft - this.$.pin.offsetWidth / 2;

    if (left >= 0 && left <= this.$.bar.offsetWidth) {
      return left;
    } else if (left < 0) {
      return 0;
    } else {
      return this.$.bar.offsetWidth;
    }
  },

  convertPositionToValue(pos) {
    return Math.round(pos * this.max / this.$.bar.offsetWidth);
  },

  ready() {
    this.customStyle['--pin-position-x'] = '0';
  }
};

