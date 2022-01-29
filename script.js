$(document).ready(function(){
	$(".sidebar-btn").click(function(){
		$(".wrapper").toggleClass("collapse");
	});
});

//map options
let mapOptions = {
	center: [42.860, 3.472],
	zoom:6,
	zoomControl: false
}

//create map
var map = L.map('map',mapOptions)

let layer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png');
layer.addTo(map);