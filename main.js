$(document).ready(function() {
	$.getJSON('data.json', (topSpotsArray) => {
  	$.each(topSpotsArray, function(property, val) {
			$('#top-spots').append(`
			<tr>
				<td style='background-color: lightseagreen'>${val.name}</td>
				<td>${val.description}</td>
				<td style='background-color: lightseagreen; border: none; color: white; cursor: pointer'>
					<a href="https://www.google.com/maps?q=${val.location}">Open in Google Maps</a>
				</td>`)
		});
	});
});
