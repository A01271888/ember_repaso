import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('lista-eventos', {path: '/'}); //para indicar cual es el "url" con la que se accederá  -- '/' es la de del inicio
  this.route('event-detail', {path: 'event-detail/:event_id'});
  this.route('nuevo-evento');
  this.route('registration', {path: 'registration/:event'});
  this.route('login');
  this.route('notifications');
});

export default Router;
