console.log('TEST') // I do see this log in my browser, so I'm guessing the mixin is loaded correctly
const testMixin = {
  methods: {
    testMethod() {
      return 'HELLO'
    },
  },
};

export {
  testMixin,
};