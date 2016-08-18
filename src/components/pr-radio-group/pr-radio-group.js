export default {
  is: 'pr-radio-group',
  properties: {
    selected: {
      type: String,
      value: '',
      notify: true,
      observer: '_checkSelected'
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

  _checkSelected(selected) {
    const isInOptions = Polymer
      .dom(this)
      .querySelectorAll('pr-radio[value]')
      .some(e => {
        console.log(e, selected);
        return e.value === selected;
      });

    console.log('checking', isInOptions);
    if(isInOptions) {
      this._setChecked(selected);
    }
  },

  _setChecked(checked) {
    const dom = Polymer.dom(this);
    const node = dom.querySelector(`[value="${checked}"]`);
    const removeNode = dom.querySelector('[checked]');

    if(removeNode) {
      removeNode.removeAttribute('checked');
    }

    if(node) {
      node.setAttribute('checked', '');

      this.fire('selected-changed', this.selected);
    }
  }
};

