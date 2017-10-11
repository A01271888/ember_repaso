import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    let id = params.event_id;
    return this.store.find('event', id);
  },
  actions: {
    borrar(){
      //this.get('model').deleteRecord();
      this.get('model').destroyRecord();
      // alert('Desde el route');
    }
  }
});
