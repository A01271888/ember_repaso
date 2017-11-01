import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let evento = this.get('store').createRecord('event', {});
    return evento;
  }
});
