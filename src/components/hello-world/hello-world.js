export default {
  is: 'hello-world',
  properties: {
    name: {
      type: String,
      value: 'Name'
    },
    pressed: {
      type: Boolean,
      value: false,
      notify: true,
      reflectToAttribute: true
    },
  },
  listeners: {
    'tap': 'toggle'
  },
  toggle(...args) {
    this.pressed = !this.pressed;
  },
  ready: () => console.log('ready'),
  created: () => console.log('created'),
  attached: () => console.log('attached'),
  detached: () => console.log('detached'),
  attributeChanged: () => console.log('attributeChanged')
};

