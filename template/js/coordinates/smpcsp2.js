			ln_smpcsp2 = [
				["0",-4.33684, 132.03301],
				["1",-4.34656, 129.7377],
				["2",-4.34656, 128.00911],
				["3",-3.2449, 127.17413],
				["4",-2.07977, 126.27384],
				["5",-0.91605, 126.52613],
				["6",-0.91605, 126.79581],
				["7",1.36443, 126.79581],
				// ["10",-3.94357, 124.4545],
				// ["11",1.2888, 126.62979],
			]
 
			mk_smpcsp2_sorong_hub= [
				["sh0",-0.84317, 131.24062],
				["sh1",-0.57726, 130.99888],
				["sh4",-0.74569, 130.35443],
				["sh5",-0.91605, 130.27137],
				["sh6",-0.91605, 130.03819],
				["bacan_hub1",-0.91605, 127.35996]
			]

			mk_smpcsp2= [
				["FakFak",-2.94369, 132.3283,[["fakfak_hub",-2.95194, 132.31729],ln_smpcsp2[0]]],
				["1",-4.55825, 129.92439,[ln_smpcsp2[1]]],
				["2",-3.35444, 128.94871,[ln_smpcsp2[2]]],
				["Ambon",-3.71904, 128.26817,[ln_smpcsp2[2]]],
				["4",-3.26257, 127.11184,[ln_smpcsp2[3]]],
				["5",-2.0733, 125.97889,[ln_smpcsp2[4]]],
				["6",-0.65924, 127.47444,[["bacan_hub1",-0.91605, 127.35996],["bacan_hub2",-0.91605, 127.05784],ln_smpcsp2[6]]],
				["Ternate",0.80333, 127.38787,[["ternate_hub",1.13431, 127.32334],ln_smpcsp2[7]]],
				["Sofifi",0.74052, 127.56192,[["Ternate",0.80333, 127.38787]]],
				["Manado",1.36443, 125.07658,[ln_smpcsp2[7]]],
				["Kendari",-3.88345, 122.50581,[["kendari_hub",-3.88345, 126.48167],ln_smpcsp2[2]]],
				["Sorong",-0.84445, 131.23993,mk_smpcsp2_sorong_hub],
			]

			for (i=0;i<mk_smpcsp2.length;i++){
				var marker = L.circleMarker([ mk_smpcsp2[i][1], mk_smpcsp2[i][2]],{radius:1,color:'#BF530A',fillColor:'#BF530A'}).addTo(mymap);
				var Geodesic = L.geodesic([], { weight: 2,	color: '#BF530A', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(mk_smpcsp2[i][1], mk_smpcsp2[i][2]);
				xln_smpcsp2s = [a]
				for(j in mk_smpcsp2[i][3]) {
					var b = new L.LatLng(mk_smpcsp2[i][3][j][1], mk_smpcsp2[i][3][j][2]);
					xln_smpcsp2s.push(b)
				}
				Geodesic.setLatLngs([xln_smpcsp2s]);
			}

			ln_smpcsp2s = []
			for (i=0;i<ln_smpcsp2.length;i++){
				var Geodesic = L.geodesic([], { weight: 2,	color: '#BF530A', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(ln_smpcsp2[i][1], ln_smpcsp2[i][2]);
				ln_smpcsp2s.push(a)
			}
			Geodesic.setLatLngs([ln_smpcsp2s]);