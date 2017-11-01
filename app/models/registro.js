import DS from 'ember-data';

export default DS.Model.extend({
  participantes: DS.belongsTo('participante'),
  actividades: DS.hasMany('activity')
});
