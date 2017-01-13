import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addVote(answer) {
      var params = {
        vote: parseInt(answer.get('vote')) + 1
      };
      console.log(answer);
      this.sendAction('addVote', answer, params)
    },

    removeVote(answer) {
      var params = {
        vote: parseInt(answer.get('vote')) - 1
      };
      console.log(answer);
      this.sendAction('removeVote', answer, params)
    }
  }
});
