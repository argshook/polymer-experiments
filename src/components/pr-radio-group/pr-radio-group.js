export default {
  is: 'pr-radio-group',
  properties: {
    selected: {
      type: String,
      value: '',
      notify: true
    }
  },

  listeners: {
    tap: '_onTap'
  },

  _onTap(event) {
    if (event.target.nodeName === 'PR-RADIO' && !event.target.checked) {
      this.selected = event.target.value;

      Polymer
        .dom(this)
        .querySelector('[checked]')
        .removeAttribute('checked');

      Polymer
        .dom(event.target)
        .setAttribute('checked', '');
    }
  },

  attached() {
    Polymer
      .dom(this)
      .querySelector(`[value=${this.selected}]`)
      .setAttribute('checked', '');
  }
};

