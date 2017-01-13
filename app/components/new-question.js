import Ember from 'ember';

export default Ember.Component.extend({
  addQuestionTag: false,

  actions: {
    showQuestionForm() {

      this.set('addQuestionTag', true);
    },
    saveQuestion() {
      var currentTime = new Date();  
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes'),
        asked: currentTime.toDateString() + " at " + currentTime.toLocaleTimeString()
      }
      this.set('addQuestionTag', false);
      this.sendAction('saveQuestion', params)
    }
  }
});
