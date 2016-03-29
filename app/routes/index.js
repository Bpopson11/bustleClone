import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('story');
  }
  actions:{
  update(rental, params) {
  this.sendAction('update', rental, params);
  },
  delete(rental) {
    if (confirm('Are you sure you want to delete this rental?')) {
      this.sendAction('destroyRental', rental);
    }
  }
}
});
