import Ember from 'ember';

export default Ember.Controller.extend({
  // contadorEventosText: Ember.computed('model.[]', function(){
  //   // this -> instanciade Controller
  //   return `Mostrando ${this.get('model.length')} eventos`;
  //   // return "Mostrando " + thi.get('model.length') + " eventos";
  // })

  // Pasamos lo de arriba a funciones GET y SET
  contadorEventosText: Ember.computed('model.[]',{
    get: function(){
      return `Mostrando ${this.get('model.length')} eventos`;
    },
    set: function(key, value){
      // cualquier tipo de acción

      return value;
    }
  }),
  isMayor10: Ember.computed.gt('model.length', 10),
  filteredModel: Ember.computed.filter('model', function(item, index){
    return Date.parse(item.get('inicio')) > new Date().getTime();
    //Regresa un booleano para saber si se coloca o no el modelo
  })

});


// Ember.computed.property -> Puede llamar a ejecutarse cuando cambien
//                            otras variables dependientes
