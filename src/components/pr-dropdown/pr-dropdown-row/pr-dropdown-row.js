export default {
  is: 'pr-dropdown-row',
  properties: {
    value: {
      type: String,
    },
    selected: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    }
  },

  listeners: {
    tap: '_onTap'
  },

  _onTap() {
    this.fire('row-click', {
      value: this.value
    });
  },

  ready() {
    const parent = Polymer.dom(this).parentNode;
    parent.addEventListener('dropdown-value-changed', ({ detail }) => {
      this.selected = this.value === detail.value;
    });
  }
};

