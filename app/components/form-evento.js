import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  actions:{
    save(){
      // Logica necesaria para crear el Evento

      // 0) Inicializar el modelo (contenedor)
      // lo pasamos al route de nuevo-evento
      // let evento = this.get('store').createRecord('event', {});
      let evento = this.get('evento');

      // 1) Llenar campos
      // evento.set('nombre', this.get('nombreEvento'));
      // evento.set('inicio', this.get('inicioEvento'));
      // evento.set('fin', this.get('finEvento'));

      // 2) Validar los campos
      if(Ember.isBlank( evento.get('nombre'))){
        alert('El campo de nombre no puede estar vacio.');
        return;
      }

      // this.get('actividadesArray').forEach((a)=>{
      //   a.set('evento', evento);
      // })

      // 3) Mandar a guardar
      evento.save().then(()=>{ // para conservar el this
        //esta en el mismo contexto que arriba
        //aqui ya estoy segura de que ya se guardó
        Ember.RSVP.all(  evento.get('actividades').invoke('save')  ).then(()=>{
          alert('Ya se guardo');
          //La ACCIONES LAS ESCUCHA EL QUE INSERTO EL COMPONENTE
          this.sendAction('didSave');
        }) // para saber si ya se cumplieron las promesas
      });  // es asíncrono
      // es posible que aún no se haya guardado
    },
    saveActivity(){
      // Inicializa una nueva activity en el store,
      // y le llena sus atributos con las variables del formulario
      let activity = this.get('store').createRecord('activity', {
        evento: this.get('evento'), // se hace el enlace de actividad con evento
        // nombre: this.get('nombreActividad'),
        // inicio: this.get('inicioActividad'),
        // fin: this.get('finActividad')
      });

      // Todo se esta trabajando directamente desde el form-hbs

      // La nueva activity se guarda en un arreglo temporal
      // if(!Ember.isPresent(this.get('actividadesArray'))){
      //   this.set('actividadesArray', [])
      // };
      // this.get('actividadesArray').pushObject(activity);

      // Se limpian las variables para volver a utilizarlas
      // this.setProperties({
      //   nombreActividad: null,
      //   inicioActividad: null,
      //   finActividad: null
      // });

    }
  }
});
