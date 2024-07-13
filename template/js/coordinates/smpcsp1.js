			ln_smpcsp1 = [
				["0",-2.25005, 140.64697],
				["1",-1.31668, 138.04321],
				["2",-1.31668, 136.16062],
				["3",-0.61029, 134.10801],
				["4",-0.12355, 132.65446],
				["5",-0.59168, 130.99552],
				["6",-0.75756, 130.36102],
				["7",-1.07469, 130.20996],
				["8",-3.52847, 132.21544],
				["9",-4.33684, 132.8632],
				["10",-5.58299, 136.8129],
				// ["14",-6.07346, 137.53845],
				["11",-8.5755, 137.35115],
			]
			
			mk_smpcsp1= [
				["Jayapura",-2.5157, 140.74001,[ln_smpcsp1[0]]],
				["2",-1.68028, 138.24371,[ln_smpcsp1[1]]],
				["3",-1.20924, 136.11176,[ln_smpcsp1[2]]],
				["Manokwari",-0.88142, 134.10873,[ln_smpcsp1[3]]],
				["Sorong",-0.84445, 131.23993,[ln_smpcsp1[5]]],
				["7",-0.42552, 130.84991,[ln_smpcsp1[5]]],
				["FakFak",-2.94369, 132.3283,[ln_smpcsp1[8]]],
				["Kaimana",-3.68558, 133.77598,[ln_smpcsp1[9]]],
				["Timika",-4.83417, 136.67969,[ln_smpcsp1[10]]],
				["Tual",-5.61885, 132.72766,[ln_smpcsp1[9]]],
				["Merauke",-8.52092, 140.38743,[ln_smpcsp1[11]]],
			]

			ln_smpcsp1s = []
			for(i=0;i<ln_smpcsp1.length;i++) {
				var marker = L.circleMarker([ ln_smpcsp1[i][1], ln_smpcsp1[i][2]],{radius:1,color:'#831F54',fillColor:'#831F54'}).addTo(mymap);
				// marker.bindPopup(+ln_smpcsp1[i][0], { noHide: true });
				// marker.bindTooltip("smpcsp1\t"+ln_smpcsp1[i][0], { permanent: true, interactive: true });
				var Geodesic = L.geodesic([], { weight: 2,	color: '#831F54', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(ln_smpcsp1[i][1], ln_smpcsp1[i][2]);
				ln_smpcsp1s.push(a)

			}
			Geodesic.setLatLngs([ln_smpcsp1s]);

			for (i=0;i<mk_smpcsp1.length;i++){
				var Geodesic = L.geodesic([], { weight: 2,	color: '#831F54', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(mk_smpcsp1[i][1], mk_smpcsp1[i][2]);
				xln_smpcsp1s = [a]
				for(j in mk_smpcsp1[i][3]) {
					// L.LN_Polysmpcsp1.arc([data[i].from.lat, data[i].from.lng], [data[i].to.lat, data[i].to.lng]).addTo(mymap);
					var b = new L.LatLng(mk_smpcsp1[i][3][j][1], mk_smpcsp1[i][3][j][2]);
					xln_smpcsp1s.push(b)
				}
				Geodesic.setLatLngs([xln_smpcsp1s]);
			}
			