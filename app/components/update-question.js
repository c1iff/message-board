import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionTag: false,

  actions: {
    showQuestionForm() {

      this.set('updateQuestionTag', true);
    },
    updateQuestion(question) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes'),
        asked: Date.now(),
      }
      this.set('updateQuestionTag', false);
      this.sendAction('updateQuestion', question, params)
    }
  }
});
