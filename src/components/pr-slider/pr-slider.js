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
      value: 0
    },
    max: {
      type: Number,
      value: 100
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
        return this.updateValue(event.detail.x);

      case 'end':
        return Polymer.dom(this.$.bar).classList.remove('tracking');
    }
  },

  handleTap(event) {
    this.updateValue(event.detail.x);
  },

  updateValue(pos) {
    const newPosition = this.getRelativePosition(pos);

    this.value = this.convertPositionToValue(newPosition);
    this.position = newPosition;
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

  convertValueToPosition(value) {
    return Math.round(value * this.$.bar.offsetWidth / this.max);
  },

  attached() {
    this.position = this.convertValueToPosition(this.value);
  }
};

