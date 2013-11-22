	$(function() { 

		$.getJSON('js/countries.json', function(data){
	    

		$('#map').vectorMap({
	 		map: 'world-mill-en',
	        markers: data.countries.coords,
	        scaleColors: ['#C8EEFF', '#0071A4'],
		    normalizeFunction: 'polynomial',
		    hoverOpacity: 0.7,
		    hoverColor: false,
		    markerStyle: {
	        	initial: {
		        fill: '#F8E23B',
		        stroke: '#383f47'
	  	    	}
	    	},
	    	 


	   		});
		});

});