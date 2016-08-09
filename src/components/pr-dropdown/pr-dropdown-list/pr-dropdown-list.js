export default {
  is: 'pr-dropdown-list',
  properties: {
    hidden: {
      type: Boolean,
      value: false,
      observer: 'hiddenChanged'
    }
  },

  hiddenChanged(value, oldValue) {
    const { left, right, width, height, top } = this.parentNode.getBoundingClientRect();
    this.customStyle['--parent-height'] = `${top + height}px`;
    this.customStyle['--parent-left'] = `${left}px`;
    this.customStyle['--parent-right'] = `${right}px`;
    this.customStyle['--parent-width'] = `${width}px`;

    this.updateStyles();
  },

  ready() {
    //document.body.addEventListener('click', event => {
      //if(event.target === this) {
        //this.hidden = true;
      //}
    //});
  }
};
