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

var $$ = Framework7.$;
$$(document).on('pagecreate', function () {
	//do something

}).on('click', '.play-btn', function (e) {

		var $audio = $("#audio");
				

		/*................. play/pause................ */
		
		if($audio[0].paused) {
			$audio[0].play();
		} else {
			$audio[0].pause();
		}

		$(this).toggleClass('pause-btn');


		$audio.on('timeupdate', function() {
			if($audio[0].ended) { 
				jQuery('.play-btn').removeClass('pause-btn');
			}

		});

	});


 
