			ln_tscs=[
				["0",2.86489, 117.94237],
				["1",3.14602, 117.64986],
			]

			mk_tscs = [
				["TjSelor",2.6317, 117.79818,[ln_tscs[0]]],
				["Tarakan",3.24541, 117.65242,[ln_tscs[1]]],
			]

			for (i=0;i<mk_tscs.length;i++){
				var marker = L.circleMarker([ mk_tscs[i][1], mk_tscs[i][2]],{radius:1,color:'#B1BB00',fillColor:'#B1BB00'}).addTo(mymap);
				var Geodesic = L.geodesic([], { weight: 2,	color: '#B1BB00', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(mk_tscs[i][1], mk_tscs[i][2]);
				xln_tscss = [a]
				for(j in mk_tscs[i][3]) {
					var b = new L.LatLng(mk_tscs[i][3][j][1], mk_tscs[i][3][j][2]);
					xln_tscss.push(b)
				}
				Geodesic.setLatLngs([xln_tscss]);
			}

			ln_tscss = []
			for (i=0;i<ln_tscs.length;i++){
				var Geodesic = L.geodesic([], { weight: 2,	color: '#B1BB00', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(ln_tscs[i][1], ln_tscs[i][2]);
				ln_tscss.push(a)
			}
			Geodesic.setLatLngs([ln_tscss]);
