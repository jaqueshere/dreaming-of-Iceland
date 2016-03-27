$(document).ready(function() {
});

var icelandVids = function() {
	//var today = new Date();
	console.log("jQuery loaded");
	gapi.client.setApiKey('AIzaSyAMlAeLZanaI8Hrhu5iT2ihaRos2Tc8z2I');
	gapi.client.load('youtube', 'v3').then(function() {
		console.log('youtube loaded.');
		var request = gapi.client.youtube.search.list({
			q: 'iceland',
			part: 'snippet',
			maxResults: 5
		});
		request.execute(function(response) {
			var str = response.result.items;
			//console.log(str);
			$.each(str, function(key, data) {
				console.log(data);
				console.log(data.snippet);
				$('#one').append('<p><a href = "http://www.youtube.com/watch?v=' + data.id.videoId + '">' + data.snippet.title + '</a></p>');	
			});
		});
	});
}


//key = 'AIzaSyAMlAeLZanaI8Hrhu5iT2ihaRos2Tc8z2I'