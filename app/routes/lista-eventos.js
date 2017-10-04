import Ember from 'ember';

export default Ember.Route.extend({
  // beforeModel(){},
  model(){
    return this.store.findAll('event');
    //esta función puede regresar cualquier tipo de valores
  }
  // afterModel(){},
  // setupController(){}
  //no importa si se declaran en diferente orden, siempre se ejecutan en este.
});
