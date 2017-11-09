import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    sigIn(provider){
        //Còdigo para inicio de sesiòn
        switch (provider) {
          case 'facebook':
            this.get('session').open('firebase',{provider: 'facebook'}).then(()=>{
              // el inicio funcionó
              if(this.get('session.isAuthenticated')){
                return this.transitionToRoute("lista-eventos");
              }else{
                return this.transitionToRoute("login");
              }
            }).catch(()=>{
              // Falló el inicio
              if(this.get('session.isAuthenticated')){
                return this.transitionToRoute("/");
              }else{
                return this.transitionToRoute("lista-eventos");
              }
            });
            break;

        }
    },
  }
});
