import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    selectActividad(actividad, jqueryEvent){
      //debugger

      //leer el estado del item
      let checked = jqueryEvent.target.checked;

      this.sendAction('selectActividad', actividad, checked);  //<---Puede llevar otro nombre
    }
  }
});
