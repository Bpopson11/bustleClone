import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  updateStoryForm: false,
  actions: {
    imageShow() {
      this.set('isImageShowing', true);
    },
    imageHide() {
      this.set('isImageShowing', false);
    },
    update(story, params) {
      this.sendAction('update', story, params);
    },
    delete(story) {
      if (confirm('Are you sure you want to delete this story?')) {
        this.sendAction('destroyStory', story);
      }
    }
  }
});
