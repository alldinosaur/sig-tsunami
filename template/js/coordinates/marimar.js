			ln_marimar = [
				["0",-6.10321, 119.9515],
				["1",-6.69168, 120.46372],
				["2",-6.69168, 122.17721],
				["3",-6.69168, 122.57149],

			]

			mk_marimar=[
				["Makassar",-5.42183, 119.36373,[ln_marimar[0]]],
				["1",-6.10434, 120.46372,[ln_marimar[0]]],
				["BauBau",-5.52876, 122.57149,[ln_marimar[3]]],
				["Maumere",-8.57624, 122.17721,[ln_marimar[2]]],
				["4",-5.2892, 123.52707,[ln_marimar[3]]],
				["Kendari",-3.89693, 123.52707,[["4",-5.2892, 123.52707]]],
			]

			for (i=0;i<mk_marimar.length;i++){
				var marker = L.circleMarker([ mk_marimar[i][1], mk_marimar[i][2]],{radius:1,color:'#48406F',fillColor:'#48406F'}).addTo(mymap);
				var Geodesic = L.geodesic([], { weight: 2,	color: '#48406F', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(mk_marimar[i][1], mk_marimar[i][2]);
				xln_marimars = [a]
				for(j in mk_marimar[i][3]) {
					var b = new L.LatLng(mk_marimar[i][3][j][1], mk_marimar[i][3][j][2]);
					xln_marimars.push(b)
				}
				Geodesic.setLatLngs([xln_marimars]);
			}

			ln_marimars = []
			for (i=0;i<ln_marimar.length;i++){
				var Geodesic = L.geodesic([], { weight: 2,	color: '#48406F', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(ln_marimar[i][1], ln_marimar[i][2]);
				ln_marimars.push(a)
			}
			Geodesic.setLatLngs([ln_marimars]);

