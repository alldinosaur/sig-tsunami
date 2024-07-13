	var info = L.control();
	info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		return this._div;
	};

	info.addTo(mymap);
		// get color depending on population density value
	function getColor(d) {
		return	d == "SMPCSP1" ? '#831F54' :
				d == "SMPCSP2" ? '#BF530A' :
				d == "IGG" ? '#980060' :
				d == "SUB" ? '#B00900' :
				d == "JAKALADEMA" ? '#021496' :
				d == "JASUKA" ? '#5300BB' :
				d == "MARIMAR" ? '#48406F' :
				d == "MKCS" ? '#C16600':
				d == "ASBL" ? '#BB9C00' :
				d == "HPBB" ? '#BB0000' :
				d == "LTCS" ? '#980005' :
				d == "SBCS" ? '#BB7C00' :
				d == "TSCS" ? '#B1BB00' :
							'#FFEDA0';
	}

	var legend = L.control({position: 'bottomright'});

	legend.onAdd = function (mymap) {

		var div = L.DomUtil.create('div', 'info legend'),
			grades = [
				"SMPCSP1",
				"SMPCSP2",
				"IGG",
				"SUB",
				"JAKALADEMA",
				"JASUKA",
				"MARIMAR",
				"MKCS",
				"ASBL",
				"HPBB",
				"LTCS",
				"SBCS",
				"TSCS",
			]
			labels = []

		for (var i = 0; i < grades.length; i++) {
			labels.push(
				'<p onclick=setFocus("'+grades[i]+'")><i style="background:' + getColor(grades[i]) + '"></i>'+grades[i]+'</p>'
			)
		}
		div.innerHTML = labels.join('');
		return div;
	};

	function setFocus(text){
		var center = text == "SMPCSP1" ? [[-3.01542, 135.78674],5.5] :
				text == "SMPCSP2" ? [[-1.60845, 127.96402],7] :
				text == "IGG" ? [[-1.87672, 113.3548],5.5] :
				text == "SUB" ? [[-5.2586, 116.39614],7.5] :
				text == "JAKALADEMA" ? [[-2.16699, 114.12628],5.5] :
				text == "JASUKA" ? [[-1.58145, 107.2586],5.5] :
				text == "MARIMAR" ? [[-6.4047, 121.763],6.5] :
				text == "MKCS" ? [[-8.65936, 120.04097],7.5] :
				text == "ASBL" ? [[-2.12803, 111.2674],5.5] :
				text == "HPBB" ? [[-1.50579, 104.08478],5.5] :
				text == "LTCS" ? [[-0.02857, 123.70308],7.5] :
				text == "SBCS" ? [[-0.57633, 104.56734],7.5] :
				text == "TSCS" ? [[3.01746, 117.69901],10] :
							[[-4.453559,121.81702],5.5] ;
		mymap.setView(center[0], center[1]);
	}

	legend.addTo(mymap);
