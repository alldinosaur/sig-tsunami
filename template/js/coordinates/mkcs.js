			ln_mkcs1 = [
				["0",-7.88494, 116.03863],
				["1",-7.88494, 117.34842],
				["2",-7.88494, 118.76063],
			]

			ln_mkcs2 = [
				["0",-8.97456, 118.70316],
				["1",-8.97456, 120.42596],
				["2",-8.97456, 121.56201],
			]

			mk_mkcs=[
				["Mataram",-8.49138, 116.03863,[ln_mkcs1[0]]],
				["Sumba",-8.45273, 117.34842,[ln_mkcs1[1]]],
				["Soroman",-8.31996, 118.76063,[ln_mkcs1[2]]],
				["Bima",-8.8056, 118.70316,[ln_mkcs2[0]]],
				["Waingapu",-9.63254, 120.42596,[ln_mkcs2[1]]],
				["Ende",-8.80059, 121.56201,[ln_mkcs2[2]]],
				["Kupang",-10.13652, 123.65752,[["Ende",-8.80059, 121.56201]]],
			]

			for (i=0;i<mk_mkcs.length;i++){
				var marker = L.circleMarker([ mk_mkcs[i][1], mk_mkcs[i][2]],{radius:1,color:'#C16600',fillColor:'#C16600'}).addTo(mymap);
				// marker.bindTooltip(mk_mkcs[i][0], { permanent: true, interactive: true });
				var Geodesic = L.geodesic([], { weight: 2,	color: '#C16600', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(mk_mkcs[i][1], mk_mkcs[i][2]);
				xln_mkcss = [a]
				for(j in mk_mkcs[i][3]) {
					var b = new L.LatLng(mk_mkcs[i][3][j][1], mk_mkcs[i][3][j][2]);
					xln_mkcss.push(b)
				}
				Geodesic.setLatLngs([xln_mkcss]);
			}

			ln_mkcs1s = []
			for (i=0;i<ln_mkcs1.length;i++){
				var Geodesic = L.geodesic([], { weight: 2,	color: '#C16600', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(ln_mkcs1[i][1], ln_mkcs1[i][2]);
				ln_mkcs1s.push(a)
			}
			Geodesic.setLatLngs([ln_mkcs1s]);

			ln_mkcs2s = []
			for (i=0;i<ln_mkcs2.length;i++){
				var Geodesic = L.geodesic([], { weight: 2,	color: '#C16600', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(ln_mkcs2[i][1], ln_mkcs2[i][2]);
				ln_mkcs2s.push(a)
			}
			Geodesic.setLatLngs([ln_mkcs2s]);

