export default {
  is: 'hello-world',
  properties: {
    name: {
      type: String,
      value: 'fak'
    },
  },
  ready: () => console.log('ready'),
  created: () => console.log('created'),
  attached: () => console.log('attached'),
  detached: () => console.log('detached'),
  attributeChanged: () => console.log('attributeChanged')
};

