			mk_asbl1=[
				["Simelue",2.46792, 96.4003,[]],
				["Kluat",2.934, 97.42558,[["Simelue",2.46792, 96.4003]]],
				["GnSitoli",1.25275, 97.6392,[]],
				["Sibolga",1.68931, 98.79551,[["GnSitoli",1.25275, 97.6392]]],
				["BandaAceh",5.59311, 95.33181,[["BandaAceh_hub",5.92252, 95.15429],["Sabang_hub",5.96077, 95.27514]]],
				["Sabang",5.89952, 95.32597,[["Sabang_hub",5.96077, 95.27514]]],
			]

			ln_asbl2=[
				["0",-8.59998, 122.84641],
				["2",-8.89859, 124.24717],
				["3",-8.43972, 124.24717],
			]

			mk_asbl2=[
				["0",-8.34807, 122.95693,[ln_asbl2[0]]],
				["1",-8.33653, 124.39821,[ln_asbl2[2]]],
				["Larantuka",-9.02045, 124.84898,[ln_asbl2[1]]],
			]

			mk_asbl3=[
				["TjBalai",0.99174, 103.4422,[["",0.97608, 103.44759],["",1.21804, 104.05565]]],
				["Batam",1.17818, 104.12294,[["",1.21804, 104.05565]]],
			]

			for (i=0;i<mk_asbl1.length;i++){
				var marker = L.circleMarker([ mk_asbl1[i][1], mk_asbl1[i][2]],{radius:1,color:'#BB9C00',fillColor:'#BB9C00'}).addTo(mymap);
				var Geodesic = L.geodesic([], { weight: 2,	color: '#BB9C00', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(mk_asbl1[i][1], mk_asbl1[i][2]);
				xln_asbl1s = [a]
				for(j in mk_asbl1[i][3]) {
					var b = new L.LatLng(mk_asbl1[i][3][j][1], mk_asbl1[i][3][j][2]);
					xln_asbl1s.push(b)
				}
				Geodesic.setLatLngs([xln_asbl1s]);
			}

			for (i=0;i<mk_asbl2.length;i++){
				var marker = L.circleMarker([ mk_asbl2[i][1], mk_asbl2[i][2]],{radius:1,color:'#BB9C00',fillColor:'#BB9C00'}).addTo(mymap);
				var Geodesic = L.geodesic([], { weight: 2,	color: '#BB9C00', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(mk_asbl2[i][1], mk_asbl2[i][2]);
				xln_asbl2s = [a]
				for(j in mk_asbl2[i][3]) {
					var b = new L.LatLng(mk_asbl2[i][3][j][1], mk_asbl2[i][3][j][2]);
					xln_asbl2s.push(b)
				}
				Geodesic.setLatLngs([xln_asbl2s]);
			}

			ln_asbl2s = []
			for (i=0;i<ln_asbl2.length;i++){
				var Geodesic = L.geodesic([], { weight: 2,	color: '#BB9C00', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(ln_asbl2[i][1], ln_asbl2[i][2]);
				ln_asbl2s.push(a)
			}
			Geodesic.setLatLngs([ln_asbl2s]);

			for (i=0;i<mk_asbl3.length;i++){
				var marker = L.circleMarker([ mk_asbl3[i][1], mk_asbl3[i][2]],{radius:1,color:'#BB9C00',fillColor:'#BB9C00'}).addTo(mymap);
				var Geodesic = L.geodesic([], { weight: 2,	color: '#BB9C00', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(mk_asbl3[i][1], mk_asbl3[i][2]);
				xln_asbl3s = [a]
				for(j in mk_asbl3[i][3]) {
					var b = new L.LatLng(mk_asbl3[i][3][j][1], mk_asbl3[i][3][j][2]);
					xln_asbl3s.push(b)
				}
				Geodesic.setLatLngs([xln_asbl3s]);
			}
