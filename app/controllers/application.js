import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    signOut(){
      return this.get("session").close().then(()=>{
        return this.transitionToRoute("login");
      })
    }
  },
  socket: Ember.inject.service(),
  init(){
    this._super.apply(...arguments);
    this.get('socket.socket').on('message', function(msg){
        //alert(msg);
        console.log(msg);
    })
  }
});
