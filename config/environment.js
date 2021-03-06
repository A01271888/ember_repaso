/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'ember-repaso',
    environment,
    rootURL: '/',
    locationType: 'auto',

    torii: {
      sessionServiceName: 'session' // Como se llama el servicio de Torii
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.firebase = {
      apiKey: "AIzaSyD-ChJsZQkl7DjlFyy-CSdHNIj8zpa8rJ0",
      authDomain: "emberrepaso.firebaseapp.com",
      databaseURL: "https://emberrepaso.firebaseio.com",
      projectId: "emberrepaso",
      storageBucket: "emberrepaso.appspot.com",
      messagingSenderId: "396654655675"
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.firebase = {
      apiKey: "AIzaSyD-ChJsZQkl7DjlFyy-CSdHNIj8zpa8rJ0",
      authDomain: "emberrepaso.firebaseapp.com",
      databaseURL: "https://emberrepaso.firebaseio.com",
      projectId: "emberrepaso",
      storageBucket: "emberrepaso.appspot.com",
      messagingSenderId: "396654655675"
    };
  }

  return ENV;
};
