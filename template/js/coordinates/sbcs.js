	mk_sbcs = [
		["Muntok",-2.08487, 105.13093,[["Palembang",-2.33348, 104.91151]]],
		["Palembang",-2.33348, 104.91151,[]],
	]

	for (i=0;i<mk_sbcs.length;i++){
		var marker = L.circleMarker([ mk_sbcs[i][1], mk_sbcs[i][2]],{radius:1,color:'#BB7C00',fillColor:'#BB7C00'}).addTo(mymap);
		var Geodesic = L.geodesic([], { weight: 2,	color: '#BB7C00', steps: 500, }).addTo(mymap);
		var a = new L.LatLng(mk_sbcs[i][1], mk_sbcs[i][2]);
		xln_sbcss = [a]
		for(j in mk_sbcs[i][3]) {
			var b = new L.LatLng(mk_sbcs[i][3][j][1], mk_sbcs[i][3][j][2]);
			xln_sbcss.push(b)
		}
		Geodesic.setLatLngs([xln_sbcss]);
	}