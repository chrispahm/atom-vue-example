'use babel';

import TestVueView from './test-vue-view';
import { CompositeDisposable } from 'atom';

export default {

  testVueView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.testVueView = new TestVueView(state.testVueViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.testVueView.getElement(),
      visible: false
    });

    // Mount the Vue Element
    this.testVueView.vm.$mount('#app-vue-test');
    
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'test-vue:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.testVueView.destroy();
  },

  serialize() {
    return {
      testVueViewState: this.testVueView.serialize()
    };
  },

  toggle() {
    console.log('TestVue was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
