import Ember from 'ember';

export default Ember.Component.extend({
  addNewStory: false,
    actions: {
      storyFormShow() {
        this.set('addNewStory', true);
      },
      save1() {
        var params = {
          title: this.get('title'),
          content: this.get('content'),
          img: this.get('img'),
          category: this.get('category'),
          author: this.get('author'),
        };
        this.set('addNewStory', false),
        this.sendAction('save2', params);
      }
    }
  });
