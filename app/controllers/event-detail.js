import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    borrar(){
      //this.get('model').deleteRecord();
      this.get('model').destroyRecord();
      //alert('Desde el controller');
      return this.transitionToRoute('lista-eventos');
    }
  }
});
