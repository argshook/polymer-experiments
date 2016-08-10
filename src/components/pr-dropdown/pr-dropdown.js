export default {
  is: 'pr-dropdown',

  properties: {
    opened: {
      type: Boolean,
      value: false
    },
    label: {
      type: String,
      value: 'Choose one'
    },
    value: {
      type: String,
      notify: true,
      reflectToAttribute: true
    }
  },

  listeners: {
    'row-click': '_onRowClick'
  },

  _onLabelTap() {
    this.open();
  },

  _onMaskTap() {
    this.close();
  },

  _onRowClick(event) {
    this.label = event.target.innerText;
    this.value = event.detail.value;

    this.fire('dropdown-value-changed', { value: this.value });
    this.close();
  },

  open() {
    this.opened = !this.opened;

    const { left, width, height, top } = this.getBoundingClientRect();

    this.customStyle['--list-top'] = `${top + height}px`;
    this.customStyle['--list-left'] = `${left}px`;
    this.customStyle['--list-width'] = `${width}px`;

    this.updateStyles();
  },

  close() {
    this.opened = false;
  },

  ready() {
    this.placeholder = this.label;
  }
};

