			ln_jasuka1 = [
				["0",-5.52308, 107.12648],
				["1",-2.74926, 107.12648],
				["TjPandan",-2.74279, 107.6243],
			]

			ln_jasuka2 = [
				["0",-5.84302, 106.97392],
				["1",-3.92593, 106.97392],
				// ["2",-2.62777, 106.97392],
				["3",-3.37903, 106.44518],
				// ["Toboali_hub",-3.01437, 106.44518],
			]

			ln_jasuka4=[
				["0",-2.62616, 107.42161],
				["1",0.43954, 107.42161],
				["2",-0.13179, 109.06132],
				["Pontianak_hub",-0.03957, 109.16368],
				// ["6",1.36863, 104.94999],
			]

			mk_jasuka = [
				["Jakarta",-5.97844, 107.13537,[ln_jasuka1[0]]],
				["Jakarta",-6.12601, 106.8416,[ln_jasuka2[0]]],
				["Toboali",-3.01437, 106.44518,[ln_jasuka2[2]]],
				["TjPandan",-2.74279, 107.6243,[ln_jasuka4[0]]],
				["Batam",1.17818, 104.12294,[["2",1.42812, 105.08701]]],
				["Pontianak",-0.03957, 109.16368,[["2",1.42812, 105.08701]]],
				["4",-1.52831, 105.86428,[["Batam",1.17818, 104.12294]]],
			]

			for (i=0;i<mk_jasuka.length;i++){
				var marker = L.circleMarker([ mk_jasuka[i][1], mk_jasuka[i][2]],{radius:1,color:'#5300BB',fillColor:'#5300BB'}).addTo(mymap);
				// marker.bindTooltip(mk_jasuka[i][0], { permanent: true, interactive: true });
				var Geodesic = L.geodesic([], { weight: 2,	color: '#5300BB', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(mk_jasuka[i][1], mk_jasuka[i][2]);
				xln_jasukas = [a]
				for(j in mk_jasuka[i][3]) {
					var b = new L.LatLng(mk_jasuka[i][3][j][1], mk_jasuka[i][3][j][2]);
					xln_jasukas.push(b)
				}
				Geodesic.setLatLngs([xln_jasukas]);
			}

			ln_jasuka1s = []
			for (i=0;i<ln_jasuka1.length;i++){
				// var marker = L.circleMarker([ ln_jasuka1[i][1], ln_jasuka1[i][2]],{radius:1,color:'#8edb57',fillColor:'#8edb57'}).addTo(mymap);
				// // marker.bindPopup(+ln_jasuka1[i][0], { noHide: true });
				// marker.bindTooltip("jasuka\t"+ln_jasuka1[i][0], { permanent: true, interactive: true });

				var Geodesic = L.geodesic([], { weight: 2,	color: '#5300BB', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(ln_jasuka1[i][1], ln_jasuka1[i][2]);
				ln_jasuka1s.push(a)
			}
			Geodesic.setLatLngs([ln_jasuka1s]);

			ln_jasuka2s = []
			for (i=0;i<ln_jasuka2.length;i++){
				// var marker = L.circleMarker([ ln_jasuka2[i][1], ln_jasuka2[i][2]],{radius:1,color:'#8edb57',fillColor:'#8edb57'}).addTo(mymap);
				// marker.bindPopup(+ln_jasuka2[i][0], { noHide: true });
				// marker.bindTooltip("jasuka2\t"+ln_jasuka2[i][0], { permanent: true, interactive: true });

				var Geodesic = L.geodesic([], { weight: 2,	color: '#5300BB', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(ln_jasuka2[i][1], ln_jasuka2[i][2]);
				ln_jasuka2s.push(a)
			}
			Geodesic.setLatLngs([ln_jasuka2s]);

			ln_jasuka4s = []
			for (i=0;i<ln_jasuka4.length;i++){
				// var marker = L.circleMarker([ ln_jasuka4[i][1], ln_jasuka4[i][2]],{radius:1,color:'#8edb57',fillColor:'#8edb57'}).addTo(mymap);
				// // marker.bindPopup(+ln_jasuka4[i][0], { noHide: true });
				// marker.bindTooltip("jasuka\t"+ln_jasuka4[i][0], { permanent: true, interactive: true });

				var Geodesic = L.geodesic([], { weight: 2,	color: '#5300BB', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(ln_jasuka4[i][1], ln_jasuka4[i][2]);
				ln_jasuka4s.push(a)
			}
			Geodesic.setLatLngs([ln_jasuka4s]);
