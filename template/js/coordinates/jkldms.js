			ln_jkldm = [
				["0",-0.41778, 109.03111],
				["1",-1.88795, 109.03111],
				["2",-3.92593, 110.57877],
				["3",-3.92593, 111.70006],
				["4",-3.92593, 114.2409],
			]

			mk_jkldm = [
				["Pontianak",-0.03984, 109.1643,[ln_jkldm[0]]],
				["Ketapang",-1.88795, 109.97866,[ln_jkldm[1]]],
				["2",-2.85801, 111.70006,[ln_jkldm[3]]],
				["Banjarmasin",-3.92593, 114.62175,[ln_jkldm[4]]],
				["5",-8.63907, 114.19894,[["5_hub",-8.85797, 114.46384],["Denpasar_hub",-8.85797, 115.25758]]],
				["Denpasar",-8.70933, 115.25758,[["Denpasar_hub",-8.85797, 115.25758]]],
				["Padangbai",-8.55489, 115.46357,[["Padangbai_hub",-8.55489, 115.80828]]],
				["Mataram",-8.49275, 116.03863,[["Padangbai_hub",-8.55489, 115.80828]]],
				["Bontang",0.49159, 117.61417,[["Palu",-0.64595, 119.73124]]],
				["Palu",-0.64595, 119.73124,[]],
			]

			for (i=0;i<mk_jkldm.length;i++){
				var marker = L.circleMarker([ mk_jkldm[i][1], mk_jkldm[i][2]],{radius:1,color:'#021496',fillColor:'#021496'}).addTo(mymap);
				var Geodesic = L.geodesic([], { weight: 2,	color: '#021496', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(mk_jkldm[i][1], mk_jkldm[i][2]);
				xln_jkldms = [a]
				for(j in mk_jkldm[i][3]) {
					var b = new L.LatLng(mk_jkldm[i][3][j][1], mk_jkldm[i][3][j][2]);
					xln_jkldms.push(b)
				}
				Geodesic.setLatLngs([xln_jkldms]);
			}

			ln_jkldms = []
			for (i=0;i<ln_jkldm.length;i++){
				var Geodesic = L.geodesic([], { weight: 2,	color: '#021496', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(ln_jkldm[i][1], ln_jkldm[i][2]);
				ln_jkldms.push(a)
			}
			Geodesic.setLatLngs([ln_jkldms]);