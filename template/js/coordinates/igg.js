			ln_igg = [
				["0",1.44828, 119.61922],
				["1",-1.25491, 118.50847],
				["2",-3.23551, 117.71967],
				["3",-4.28063, 117.36099],
				["4",-5.52308, 116.85562],
				["5",-5.52308, 115.11372],
				["6",-5.52308, 113.88863],
				["7",-5.52099, 108.72101],
				["8",-3.47217,107.26503],
				// ["9",-3.92593, 107.26503],
				// ["9",-3.92593, 108.87482],
				// ["10",-1.88795, 108.87482],
				["10",0.8278, 107.26503],
				["11",1.51871, 105.26339],
			]

			mk_igg = [
				["Tarakan",3.24541, 117.65242,[ln_igg[0]]],
				["Manado",1.44828, 124.75381,[ln_igg[0]]],
				["Balikpapan",-1.25491, 116.9299,[ln_igg[1]]],
				// ["Banjarmasin",-3.23536, 116.27388,[ln_igg[2]]],
				["Makassar",-5.42113, 119.36715,[ln_igg[3]]],
				["Singaraja",-8.08643, 115.11372,[ln_igg[5]]],
				["Madura",-6.89713, 113.11593,[ln_igg[6]]],
				["Jakarta",-5.97844, 107.13537,[["7",-5.50694, 107.26503],ln_igg[8]]],
				["PSeribu",-5.7487, 106.61374,[["7",-5.50694, 107.26503],ln_igg[8]]],
				["Batam",1.22898, 104.15178,[ln_igg[10]]],
			]

			for (i=0;i<mk_igg.length;i++){
				var marker = L.circleMarker([ mk_igg[i][1], mk_igg[i][2]],{radius:1,color:'#980060',fillColor:'#980060'}).addTo(mymap);
				var Geodesic = L.geodesic([], { weight: 2,	color: '#980060', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(mk_igg[i][1], mk_igg[i][2]);
				xln_iggs = [a]
				for(j in mk_igg[i][3]) {
					var b = new L.LatLng(mk_igg[i][3][j][1], mk_igg[i][3][j][2]);
					xln_iggs.push(b)
				}
				Geodesic.setLatLngs([xln_iggs]);
			}

			ln_iggs = []
			for (i=0;i<ln_igg.length;i++){
				// var marker = L.circleMarker([ ln_igg[i][1], ln_igg[i][2]],{radius:1,color:'#831F54',fillColor:'#831F54'}).addTo(mymap);
				// marker.bindPopup(+ln_igg[i][0], { noHide: true });
				// marker.bindTooltip("igg\t"+ln_igg[i][0], { permanent: true, interactive: true });
				var Geodesic = L.geodesic([], { weight: 2,	color: '#980060', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(ln_igg[i][1], ln_igg[i][2]);
				ln_iggs.push(a)
			}
			Geodesic.setLatLngs([ln_iggs]);

			// var z = new L.LatLng(ln_igg[8][1], ln_igg[8][2]);
			// var zs = new L.LatLng(ln_igg[4][1], ln_igg[4][2]);
			// Geodesic.setLatLngs([[z,zs]]);
