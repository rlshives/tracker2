import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('questions');
	this.resource('multiplechoices', function () {
		this.route('multiplechoice', { path: '/:id'});
	});
});

export default Router;
