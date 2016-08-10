export default {
  is: 'pr-dropdown-row',
  properties: {
    value: {
      type: String,
    },
    selected: {
      type: Boolean,
      value: false
    }
  },

  listeners: {
    tap: '_onTap'
  },

  _onTap() {
    this.fire('row-click', {
      label: this.innerText,
      value: this.value
    });
  }
};

