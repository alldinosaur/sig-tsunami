			ln_me=[
				["0",1.69444, 101.40659],
				["1",2.63309, 101.32694],
				["2",4.63123, 99.58012],
				["3",9.55779, 95.2298],
			]

			mk_me = [
				["Medan",3.72549, 98.75557,[ln_me[2]]],
			]

			mk_me_ep = [
				["3",9.55779, 95.2298],
			]

			for (i=0;i<mk_me.length;i++){
				var marker = L.circleMarker([ mk_me[i][1], mk_me[i][2]],{radius:1,color:'#8edb57',fillColor:'#8edb57'}).addTo(mymap);
				var Geodesic = L.geodesic([], { weight: 2,	color: '#8edb57', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(mk_me[i][1], mk_me[i][2]);
				xln_mes = [a]
				for(j in mk_me[i][3]) {
					var b = new L.LatLng(mk_me[i][3][j][1], mk_me[i][3][j][2]);
					xln_mes.push(b)
				}
				Geodesic.setLatLngs([xln_mes]);
			}

			ln_mes = []
			for (i=0;i<ln_me.length;i++){
				var Geodesic = L.geodesic([], { weight: 2,	color: '#8edb57', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(ln_me[i][1], ln_me[i][2]);
				ln_mes.push(a)
			}
			Geodesic.setLatLngs([ln_mes]);

			for (i=0;i<mk_me_ep.length;i++){
				var marker = L.circleMarker([ mk_me_ep[i][1], mk_me_ep[i][2]],{radius:5,color:'#8edb57',fillColor:'#8edb57'}).addTo(mymap);
				marker.bindTooltip("SEA_ME_WE", { permanent: true, interactive: true });
				var Geodesic = L.geodesic([], { weight: 2,	color: '#8edb57', steps: 500, }).addTo(mymap);
				var a = new L.LatLng(mk_me_ep[i][1], mk_me_ep[i][2]);
			}