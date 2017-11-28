import Ember from 'ember';
import AuthRoute from '../mixins/authenticated'

export default Ember.Route.extend(AuthRoute, {
  beforeModel(){
    return this.get("session").fetch().catch(()=>{
      if(this.get('session.isAuthenticated')){
        // return this.transitionTo("lista-eventos");
      }else {
        return this.transitionTo('login');
      }
    })
  },
  model(){
    return this.store.findAll('event');
    //esta función puede regresar cualquier tipo de valores
  }
  // afterModel(){},
  // setupController(){}
  //no importa si se declaran en diferente orden, siempre se ejecutan en este.
});
