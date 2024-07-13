	ln_ltcs=[
		["0",-1.13142, 122.9261],
		["1",-1.13142, 123.99174],
		// ["2",0.42307, 124.71684],
	]

	mk_ltcs = [
		["Tutuyan",0.75191, 124.62389,[ln_ltcs[1]]],
		["Luwuk",-0.99357, 122.79492,[ln_ltcs[0]]],
	]

	for (i=0;i<mk_ltcs.length;i++){
		var marker = L.circleMarker([ mk_ltcs[i][1], mk_ltcs[i][2]],{radius:1,color:'#980005',fillColor:'#980005'}).addTo(mymap);
		var Geodesic = L.geodesic([], { weight: 2,	color: '#980005', steps: 500, }).addTo(mymap);
		var a = new L.LatLng(mk_ltcs[i][1], mk_ltcs[i][2]);
		xln_ltcss = [a]
		for(j in mk_ltcs[i][3]) {
			var b = new L.LatLng(mk_ltcs[i][3][j][1], mk_ltcs[i][3][j][2]);
			xln_ltcss.push(b)
		}
		Geodesic.setLatLngs([xln_ltcss]);
	}



	ln_ltcss = []
	for (i=0;i<ln_ltcs.length;i++){
		var Geodesic = L.geodesic([], { weight: 2,	color: '#980005', steps: 500, }).addTo(mymap);
		var a = new L.LatLng(ln_ltcs[i][1], ln_ltcs[i][2]);
		ln_ltcss.push(a)
	}
	Geodesic.setLatLngs([ln_ltcss]);
