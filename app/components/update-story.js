import Ember from 'ember';

export default Ember.Component.extend({
  updateStoryForm: false,
  actions: {
    updateStoryForm() {
      this.set('updateStoryForm', true);
    },
    update(story) {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        img: this.get('img'),
        category: this.get('category'),
        author: this.get('author'),
      };
      this.set('updateStoryForm', false);
      this.sendAction('update', story, params);
    }
  }
});
