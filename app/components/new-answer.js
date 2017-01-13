import Ember from 'ember';

export default Ember.Component.extend({
  addAnswerTag: false,

  actions: {
    showAnswerForm() {
      this.set('addAnswerTag', true);
    },

    saveAnswer() {
      var currentTime = new Date();
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes'),
        answered: currentTime.toDateString() + " at " + currentTime.toLocaleTimeString(),
        question: this.get('question')
      };

      this.set('addAnswerTag', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
