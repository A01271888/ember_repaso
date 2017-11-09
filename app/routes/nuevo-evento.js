import Ember from 'ember';
import AuthRoute from '../mixins/authenticated'

export default Ember.Route.extend(AuthRoute, {
  model(){
    let evento = this.get('store').createRecord('event', {});
    return evento;
  }
});
