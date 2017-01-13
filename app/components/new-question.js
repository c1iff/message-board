import Ember from 'ember';

export default Ember.Component.extend({
  addQuestionTag: false,

  actions: {
    showQuestionForm() {
      console.log('show question');
      this.set('addQuestionTag', true);
    },
    saveQuestion() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes'),
        asked: Date.now(),
      }
      this.set('addQuestionTag', false);
      this.sendAction('saveQuestion', params)
    }
  }
});
