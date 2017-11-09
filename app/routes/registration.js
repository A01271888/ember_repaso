import Ember from 'ember';
import AuthRoute from '../mixins/authenticated'

export default Ember.Route.extend(AuthRoute, {
  model(params){
    // Crear participante
    // Crear registro
    // Elegir Actividades -> Evento
    return {
      participante: this.store.createRecord('participante'),
      actividades: this.store.query('activity', {
        orderBy: 'evento', equalTo: params.event
      })
    };
  }
});
