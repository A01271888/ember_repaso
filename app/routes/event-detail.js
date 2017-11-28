import Ember from 'ember';
import AuthRoute from '../mixins/authenticated';

export default Ember.Route.extend(AuthRoute, {
  model(params){
    let id = params.event_id;
    return this.store.find('event', id);
  },
  actions: {
    borrar(){
      //this.get('model').deleteRecord();
      this.get('model').destroyRecord();
      this.get('actividades').deleteRecord();
      //alert('Desde el controller');
      return this.transitionToRoute('lista-eventos');
    },
    veAlaLista(){
      return this.transitionToRoute('lista-eventos');
    }
  }
});
