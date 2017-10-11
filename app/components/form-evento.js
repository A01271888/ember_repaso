import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  actions:{
    save(){
      // Logica necesaria para crear el Evento

      // 0) Inicializar el modelo (contenedor)
      let evento = this.get('store').createRecord('event', {});

      // 1) Llenar campos
      evento.set('nombre', this.get('nombreEvento'));
      evento.set('inicio', this.get('inicioEvento'));
      evento.set('fin', this.get('finEvento'));

      // 2) Validar los campos
      if(Ember.isBlank( evento.get('nombre'))){
        alert('El campo de nombre no puede estar vacio.');
        return;
      }

      // 3) Mandar a guardar
      evento.save().then(()=>{ // para conservar el this
        //esta en el mismo contexto que arriba
        //aqui ya estoy segura de que ya se guardó
        alert('Ya se guardo');
        //La ACCIONES LAS ESCUCHA EL QUE INSERTO EL COMPONENTE
        this.sendAction('didSave');
      });  // es asíncrono
      // es posible que aún no se haya guardado
    }
  }
});
