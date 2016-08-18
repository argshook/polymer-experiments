export default {
  is: 'pr-radio-group',
  properties: {
    selected: {
      type: String,
      value: '',
      observer: '_setSelected',
      reflectToAttribute: true
    }
  },

  listeners: {
    tap: '_onTap'
  },

  _onTap(event) {
    if (event.target.nodeName === 'PR-RADIO' && !event.target.checked) {
      this._setSelected(event.target.value);
    }
  },

  _validateSelected(value) {
    return Polymer
      .dom(this)
      .querySelectorAll('pr-radio[value]')
      .some(e => {
        return e.value === value;
      });
  },

  _setSelected(value) {
    if(!this._validateSelected(value)) {
      return;
    }

    const parent = Polymer.dom(this);
    const selectables = parent.querySelectorAll(`[value="${value}"]`);
    const currentlySelected = parent.querySelectorAll('[checked]');

    if(currentlySelected) {
      currentlySelected.map(el => el.removeAttribute('checked'));
    }

    if(selectables) {
      selectables.map(el => el.setAttribute('checked', ''));
      this.selected = value;
      this.fire('selected-changed', this.selected);
    }
  },

  attached() {
    const observer = new MutationObserver(mutations => this._setSelected(this.selected));

    observer.observe(this, {
      childList: true,
      attributes: true
    });
  }
};

