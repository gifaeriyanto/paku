// matchMedia not present, legacy browsers require a polyfill
window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {},
    };
  };

global.fetch = jest.fn();
global.console.error = jest.fn();
global.URL.createObjectURL = jest.fn();
