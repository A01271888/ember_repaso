import Ember from 'ember';

export default Ember.Route.extend({
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
