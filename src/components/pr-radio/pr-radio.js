export default {
  is: 'pr-radio',
  properties: {
    checked: {
      type: Boolean,
      value: false
    }
  },

  listeners: {
    tap: '_onTap'
  },

  _onTap() {
    this.checked = !this.checked;
  }
};

