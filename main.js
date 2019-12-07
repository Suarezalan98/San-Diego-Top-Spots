$(document).ready(function() {
	$.getJSON('data.json', (topSpotsArray) => {
  	$.each(topSpotsArray, function(property, val) {
			$('#top-spots').append(
				'<tr>' + 
					'<td class="name" style="background-color: lightseagreen">' + val.name + '</td>' +
					'<td>' + val.description + '</td>' + 
					'<td style="background-color: lightseagreen">' + 
						'<input type="button" onclick="location.href=" style="background-color: lightseagreen; border: none; color: white; cursor: pointer;" '+ 
						"'https://www.google.com/maps?q=" + val.location + "'" + ';" value="Open in Google Maps"' + '/>' + 
					'</td>' + 
				'</tr>'); 
			console.log(val.location)
		});
	});
});
