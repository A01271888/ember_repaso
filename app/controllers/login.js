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
              debugger
            }).catch(()=>{
              // Falló el inicio
              debugger
            });
            break;

          case 'email':
            this.get('session').open('firebase', {
              provider: 'password',
              email: this.get('email'),
              password: this.get('password')
            }).then(()=>{
              return this.transitionToRoute('lista-eventos');
            });
            break;

        }
    },
  }
});
