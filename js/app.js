requirejs.config({
	baseUrl: 'js/lib',
	paths: {
		app: '../app',
		jquery: 'jquery.min'
	}
});

requirejs(['jquery','app/sub'],
	function($, canvas, sub) {
		alert($);
	}
);