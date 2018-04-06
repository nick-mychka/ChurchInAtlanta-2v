// Dom7
var $ = Dom7;

// Init App
var app = new Framework7({
	id: 'io.framework7.testapp',
	root: '#app',
	theme: 'ios',
	data: function () {
		return {
			user: {
				firstName: 'John',
				lastName: 'Doe',
			},
		};
	},
	methods: {
		helloWorld: function () {
			app.dialog.alert('Hello World!');
		},
	},
	routes: routes,
	vi: {
		placementId: 'pltd4o7ibb9rc653x14',
	},
});
