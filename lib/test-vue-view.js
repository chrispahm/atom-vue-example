'use babel';

import Vue from 'Vue/dist/vue.js';

export default class TestVueView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.id = 'app-vue-test'

    const childElement = document.createElement('div');
    childElement.id = 'app-vue-test-child'
    this.element.appendChild(childElement)

    this.element.classList.add('test-vue');

    this.vm = new Vue({
      data: {
        name: 'Your Vue Package'
      },
      template: '<h1>Welcome to {{ name }}</h1>'
    })
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
