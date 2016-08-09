export default {
  is: 'pr-dropdown',

  properties: {
    open: {
      type: Boolean,
      value: false
    },
    label: {
      type: String,
      value: 'Choose one'
    }
  },

  listeners: {
    tap: 'toggle'
  },

  toggle(event) {
    this.open = !this.open;
  }
};

