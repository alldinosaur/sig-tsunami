			ln_us=[
				["Manado",1.36443, 125.07658],
				["1",4.13097, 128.31438],
				["2",8.94326, 134.06372],
			]

			mk_us = [
				["Davao",6.99224, 125.61798,[ln_us[1]]],
			]

			mk_us_ep = [
				["3",8.94326, 134.06372],
			]

			for (i=0;i<mk_us.length;i++){
				var marker = L.circleMarker([ mk_us[i][1], mk_us[i][2]],{radius:1,color:'#8edb57',fillColor:'#8edb57'}).addTo(mymap);
				var Geodesic = L.geodesic([], { weight: 2,	color: '#8edb57', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(mk_us[i][1], mk_us[i][2]);
				xln_uss = [a]
				for(j in mk_us[i][3]) {
					var b = new L.LatLng(mk_us[i][3][j][1], mk_us[i][3][j][2]);
					xln_uss.push(b)
				}
				Geodesic.setLatLngs([xln_uss]);
			}

			ln_uss = []
			for (i=0;i<ln_us.length;i++){
				var Geodesic = L.geodesic([], { weight: 2,	color: '#8edb57', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(ln_us[i][1], ln_us[i][2]);
				ln_uss.push(a)
			}
			Geodesic.setLatLngs([ln_uss]);

			for (i=0;i<mk_us_ep.length;i++){
				var marker = L.circleMarker([ mk_us_ep[i][1], mk_us_ep[i][2]],{radius:5,color:'#8edb57',fillColor:'#8edb57'}).addTo(mymap);
				marker.bindTooltip("SEA_US", { permanent: true, interactive: true });
				var Geodesic = L.geodesic([], { weight: 2,	color: '#8edb57', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(mk_us_ep[i][1], mk_us_ep[i][2]);
			}